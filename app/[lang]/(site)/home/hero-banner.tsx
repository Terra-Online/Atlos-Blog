"use client";

import React, { useEffect, useRef, useCallback, useState } from "react";
import { LinearBlur } from "progressive-blur";
import { PillButton } from "./pill-button";

const IMAGES = [
  "/home/bg/bg1.webp",
  "/home/bg/bg2.webp",
  "/home/bg/bg3.webp",
  "/home/bg/bg4.webp",
  "/home/bg/bg5.webp",
  "/home/bg/bg6.webp",
];

/** ms each image is held before the next transition begins. */
const DISPLAY_MS = 30000;
/** Total RAF-driven transition duration (ms). */
const TRANSITION_MS = 7500;

// ── Transition phase boundaries (fraction of TRANSITION_MS, 0–1) ───────────
/** End of ramp-up phase (blur/contrast rise, opacities frozen). */
const PH1 = 0.4;
/**
 * End of peak-hold / start of ramp-down.
 * Set near the midpoint of the opacity crossfade so blur begins clearing
 * as soon as the new image shape is discernible.
 */
const PH2 = 0.55;
/**
 * Blur reaches 0 at this fraction (must be ≤ 1).
 * Contrast/brightness/grayscale continue recovering until t=1.
 */
const PH_BLUR_DOWN = 0.88;
/** Opacity crossfade starts at this fraction – slightly before PH1. */
const OP_START = 0.3;
/** Opacity crossfade ends at this fraction – slightly after PH2. */
const OP_END = 0.85;
/** Text color interpolation duration when slide text style changes. */
const TEXT_COLOR_TRANSITION_MS = 1500;

// ── Peak filter values at mid-transition ────────────────────────────────────
/** Peak Gaussian blur radius (px). */
const MAX_BLUR = 36;
/** Peak CSS contrast() – kept close to 1 to avoid crushed blacks/whites. */
const MAX_CONTRAST = 1.35;
/** Floor CSS brightness() – darkens slightly to suppress local highlights. */
const MIN_BRIGHTNESS = 0.82;
/** Peak CSS grayscale() – desaturates to prevent blown-out saturated areas. */
const MAX_GRAYSCALE = 0.28;

// ── Parallax ────────────────────────────────────────────────────────────────
/**
 * Images layer oversized by ±PARALLAX_PCT on each edge.
 * Mouse movement shifts the layer in the opposite direction by up to PARALLAX_PCT.
 */
const PARALLAX_PCT = 2.5;
/** Lerp smoothing factor per animation frame. */
const PARALLAX_LERP = 0.08;

type SubtitleStyle = {
  color: string;
  blendMode: React.CSSProperties["mixBlendMode"];
};

type SlideTextStyle = {
  titleColor: string;
  titleBlendMode: React.CSSProperties["mixBlendMode"];
  subtitle: SubtitleStyle;
};

const SLIDE_TEXT_STYLES: SlideTextStyle[] = [
  {
    titleColor: "#333",
    titleBlendMode: "luminosity",
    subtitle: { color: "#216364", blendMode: "plus-darker" },
  },
  {
    titleColor: "#333",
    titleBlendMode: "luminosity",
    subtitle: { color: "#216364", blendMode: "plus-darker" },
  },
  {
    titleColor: "#855B2F",
    titleBlendMode: "difference",
    subtitle: { color: "#E5390E", blendMode: "color-burn" },
  },
  {
    titleColor: "#223C3A",
    titleBlendMode: "color-burn",
    subtitle: { color: "#216364", blendMode: "plus-darker" },
  },
  {
    titleColor: "#333",
    titleBlendMode: "color-burn",
    subtitle: { color: "#0D4A4B", blendMode: "color-burn" },
  },
  {
    titleColor: "#333",
    titleBlendMode: "luminosity",
    subtitle: { color: "#216364", blendMode: "plus-darker" },
  },
];
/**
 * SF Pro Display is the system UI font on Apple platforms.
 * On other platforms the stack falls back to similar geometric sans-serifs.
 */
const SF_DISPLAY_FAMILY =
  '"SF Pro Display", "SF Display Pro", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif';

// ── Helpers ────────────────────────────────────────────────────────────────
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/**
 * Ease-in cubic – approximates CSS cubic-bezier(0.42, 0, 1, 1).
 * Input/output: [0, 1].  Starts slow, accelerates toward 1.
 */
const easeInCubic = (t: number) => t * t * t;

// ── Text colors follow the active slide ────────────────────────────────────
function TextLines({ slideIndex }: { slideIndex: number }) {
  const style = SLIDE_TEXT_STYLES[slideIndex % SLIDE_TEXT_STYLES.length];
  const colorTransition = `color ${TEXT_COLOR_TRANSITION_MS}ms ease`;

  return (
    <>
      <h1
        className="hero-banner__title"
        style={{
          color: style.titleColor,
          mixBlendMode: style.titleBlendMode,
          transition: colorTransition,
          fontFamily: SF_DISPLAY_FAMILY,
        }}
      >
        Try Open Endfield Map
      </h1>
      <p
        className="hero-banner__subtitle"
        style={{
          color: style.subtitle.color,
          mixBlendMode: style.subtitle.blendMode,
          transition: colorTransition,
          fontFamily: SF_DISPLAY_FAMILY,
        }}
      >
        Omnipresent, Efficient, Meticulous.
      </p>
    </>
  );
}

// ── Component ──────────────────────────────────────────────────────────────
export function HeroBanner() {
  const [effectsEnabled, setEffectsEnabled] = useState(false);
  /** Outer clipping frame for pointer coordinates. */
  const outerRef = useRef<HTMLDivElement>(null);
  /**
   * The images layer.  It is 105% × 105%, offset −2.5% from each edge
   * so it always covers the outer frame.  Both the CSS filter (blur/contrast)
   * and the parallax translate are applied here.
   */
  const layerRef = useRef<HTMLDivElement>(null);
  /** Currently-visible background-image div. */
  const currentRef = useRef<HTMLDivElement>(null);
  /** Incoming background-image div (fades in during transition). */
  const nextRef = useRef<HTMLDivElement>(null);

  /**
   * Which slide's text style is currently shown.
   * Hard-switches at opT ≥ 0.5 (under peak blur, visually seamless).
   */
  const [slideTextIdx, setSlideTextIdx] = useState(0);
  /** Prevents multiple setState calls within a single transition. */
  const didTextSwapRef = useRef(false);

  // ── Slideshow state (refs → no re-renders) ───────────────────────────────
  const currentIdxRef = useRef(0);
  const isTransitioningRef = useRef(false);
  const transitionRafRef = useRef<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Parallax state ───────────────────────────────────────────────────────
  /** Smoothed current mouse position (0–1 each axis). */
  const smoothMouseRef = useRef({ x: 0.5, y: 0.5 });
  /** Raw target mouse position updated on mousemove. */
  const targetMouseRef = useRef({ x: 0.5, y: 0.5 });
  const parallaxRafRef = useRef<number | null>(null);

  useEffect(() => {
    const query = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    const update = () => setEffectsEnabled(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  // ── Transition logic ─────────────────────────────────────────────────────
  const runTransition = useCallback(() => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;

    const nextIdx = (currentIdxRef.current + 1) % IMAGES.length;

    // Prime the incoming image (invisible).
    if (nextRef.current) {
      nextRef.current.style.backgroundImage = `url('${IMAGES[nextIdx]}')`;
      nextRef.current.style.opacity = "0";
    }

    didTextSwapRef.current = false;

    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min((now - start) / TRANSITION_MS, 1); // 0 → 1

      /**
       * Filter timeline:
       *   0.00 – PH1   Phase 1 – blur/contrast ramp UP   (ease-in)
       *   PH1  – PH2   Phase 2 – filters held at peak
       *   PH2  – 1.00  Phase 3 – blur/contrast ramp DOWN  (linear)
       *
       * Opacity timeline (independent, wider window):
       *   0    – OP_START  current=1 / next=0  (frozen)
       *   OP_START – OP_END  crossfade
       *   OP_END – 1        current=0 / next=1  (frozen)
       */
      let blur: number;
      let contrast: number;
      let brightness: number;
      let grayscale: number;
      let currImgOp: number;
      let nextImgOp: number;

      if (t < PH1) {
        // Phase 1 – filter ramps up with ease-in, images frozen
        const pLin = t / PH1;
        const p    = easeInCubic(pLin);
        blur       = p * MAX_BLUR;
        contrast   = 1 + p * (MAX_CONTRAST - 1);
        brightness = 1 - p * (1 - MIN_BRIGHTNESS);
        grayscale  = p * MAX_GRAYSCALE;
      } else if (t < PH2) {
        // Phase 2 – filters held at peak values
        blur       = MAX_BLUR;
        contrast   = MAX_CONTRAST;
        brightness = MIN_BRIGHTNESS;
        grayscale  = MAX_GRAYSCALE;
      } else {
        // Phase 3 – filter ramps back down (linear)
        const pBlur = Math.min((t - PH2) / (PH_BLUR_DOWN - PH2), 1);
        const pRest = (t - PH2) / (1 - PH2);
        blur       = MAX_BLUR * (1 - pBlur);
        contrast   = MAX_CONTRAST - pRest * (MAX_CONTRAST - 1);
        brightness = MIN_BRIGHTNESS + pRest * (1 - MIN_BRIGHTNESS);
        grayscale  = MAX_GRAYSCALE * (1 - pRest);
      }

      // Opacity crossfade – independent window [OP_START, OP_END]
      const opT = t <= OP_START ? 0 : t >= OP_END ? 1 : (t - OP_START) / (OP_END - OP_START);
      currImgOp = 1 - opT;
      nextImgOp = opT;

      // Image filter / opacity.
      if (layerRef.current) {
        layerRef.current.style.filter =
          `blur(${blur.toFixed(4)}px) contrast(${contrast.toFixed(3)}) brightness(${brightness.toFixed(3)}) grayscale(${grayscale.toFixed(3)})`;
      }
      if (currentRef.current) currentRef.current.style.opacity = String(currImgOp);
      if (nextRef.current) nextRef.current.style.opacity = String(nextImgOp);

      // Hard-swap text style at the opacity crossfade midpoint (under peak blur).
      if (!didTextSwapRef.current && opT >= 0.5) {
        didTextSwapRef.current = true;
        setSlideTextIdx(nextIdx);
      }

      if (t < 1) {
        transitionRafRef.current = requestAnimationFrame(tick);
      } else {
        // ── Finalise ──────────────────────────────────────────────────────
        currentIdxRef.current = nextIdx;

        if (currentRef.current) {
          currentRef.current.style.backgroundImage = `url('${IMAGES[nextIdx]}')`;
          currentRef.current.style.opacity = "1";
        }
        if (nextRef.current) nextRef.current.style.opacity = "0";
        if (layerRef.current)
          layerRef.current.style.filter = "blur(0px) contrast(1) brightness(1) grayscale(0)";

        // Ensure text index is up to date (may have been set already mid-transition).
        setSlideTextIdx(nextIdx);

        isTransitioningRef.current = false;
        timerRef.current = setTimeout(runTransition, DISPLAY_MS);
      }
    };

    transitionRafRef.current = requestAnimationFrame(tick);
  }, []);

  // ── Start slideshow only for animated views ──────────────────────────────
  useEffect(() => {
    if (!effectsEnabled) return;
    timerRef.current = setTimeout(runTransition, DISPLAY_MS);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (transitionRafRef.current) cancelAnimationFrame(transitionRafRef.current);
      isTransitioningRef.current = false;
      if (layerRef.current) layerRef.current.style.filter = '';
      if (currentRef.current) currentRef.current.style.opacity = '1';
      if (nextRef.current) nextRef.current.style.opacity = '0';
    };
  }, [effectsEnabled, runTransition]);

  // ── Pointer-driven parallax stops scheduling frames once settled ─────────
  useEffect(() => {
    if (!effectsEnabled) return;
    const outer = outerRef.current;
    if (!outer) return;

    const animate = () => {
      const sm = smoothMouseRef.current;
      const tm = targetMouseRef.current;

      smoothMouseRef.current = {
        x: lerp(sm.x, tm.x, PARALLAX_LERP),
        y: lerp(sm.y, tm.y, PARALLAX_LERP),
      };

      if (layerRef.current && outerRef.current) {
        const { width, height } = outerRef.current.getBoundingClientRect();
        const tx = -(smoothMouseRef.current.x - 0.5) * width * (PARALLAX_PCT / 100) * 2;
        const ty = -(smoothMouseRef.current.y - 0.5) * height * (PARALLAX_PCT / 100) * 2;
        layerRef.current.style.transform = `translate(${tx}px, ${ty}px)`;
      }

      const settled = Math.abs(sm.x - tm.x) < 0.001 && Math.abs(sm.y - tm.y) < 0.001;
      parallaxRafRef.current = settled ? null : requestAnimationFrame(animate);
    };

    const schedule = () => {
      if (parallaxRafRef.current === null) {
        parallaxRafRef.current = requestAnimationFrame(animate);
      }
    };
    const onMove = (event: PointerEvent) => {
      const rect = outer.getBoundingClientRect();
      targetMouseRef.current = {
        x: (event.clientX - rect.left) / rect.width,
        y: (event.clientY - rect.top) / rect.height,
      };
      schedule();
    };
    const onLeave = () => {
      targetMouseRef.current = { x: 0.5, y: 0.5 };
      schedule();
    };

    outer.addEventListener('pointermove', onMove);
    outer.addEventListener('pointerleave', onLeave);
    return () => {
      if (parallaxRafRef.current) cancelAnimationFrame(parallaxRafRef.current);
      parallaxRafRef.current = null;
      outer.removeEventListener('pointermove', onMove);
      outer.removeEventListener('pointerleave', onLeave);
      smoothMouseRef.current = { x: 0.5, y: 0.5 };
      targetMouseRef.current = { x: 0.5, y: 0.5 };
      if (layerRef.current) layerRef.current.style.transform = '';
    };
  }, [effectsEnabled]);

  return (
    <div
      className="hero-banner"
      ref={outerRef}
    >
      <div
        className="hero-banner__layer"
        ref={layerRef}
        style={{
          width: `${100 + PARALLAX_PCT * 2}%`,
          height: `${100 + PARALLAX_PCT * 2}%`,
          left: `-${PARALLAX_PCT}%`,
          top: `-${PARALLAX_PCT}%`,
        }}
      >
        {/* Include the first image in server-rendered HTML, before hydration. */}
        <div
          className="hero-banner__image"
          ref={currentRef}
          style={{ backgroundImage: `url('${IMAGES[0]}')` }}
        />
        <div
          className="hero-banner__image"
          ref={nextRef}
          style={{
            opacity: 0,
          }}
        />
      </div>

      {/* Touch and reduced-motion views use a static scrim instead of GPU-heavy blur layers. */}
      {effectsEnabled ? (
        <LinearBlur
          className="hero-banner__progressive-blur"
          side="left"
          strength={135}
          steps={12}
          falloffPercentage={100}
          style={{ width: "65%" }}
        />
      ) : <div className="hero-banner__scrim" />}
      <div className="hero-banner__text">
        <TextLines slideIndex={slideTextIdx} />
          <div className="hero-banner__cta">
            <PillButton
              href="https://opendfieldmap.org/"
              label="Getting Started"
              iconMask="/ui/forward.svg"
              iconOffsetX={-1.5}
              iconOffsetY={0}
              iconScale={1.3}
              backgroundColor="#FFC428"
              backgroundColorHovered="#FFAD28"
              color="#333"
            />
            <PillButton
              href="https://github.com/Terra-Online/Atlos"
              label="View on GitHub"
              iconMask="/ui/gh.svg"
              iconOffsetX={-1.5}
              iconOffsetY={0}
              iconScale={1.25}
              backgroundColor="#222"
              mixBlendMode="luminosity"
              color="#F2F2EB"
              textureInvert="1"
            />
        </div>
      </div>
    </div>
  );
}
