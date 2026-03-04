import React from "react";

type PillButtonStyleVars = React.CSSProperties & {
  "--pill-bg"?: string;
  "--pill-bg-hovered"?: string;
  "--pill-fg"?: string;
  "--pill-icon-mask"?: string;
  "--pill-icon-offset-x"?: string;
  "--pill-icon-offset-y"?: string;
  "--pill-icon-scale"?: string;
  "--texture-invert"?: string;
};

type PillButtonProps = {
  href: string;
  label: string;
  iconMask?: string;
  iconOffsetX?: number;
  iconOffsetY?: number;
  iconScale?: number;
  backgroundColor?: string;
  backgroundColorHovered?: string;
  color?: string;
  textureInvert?: string;
  className?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
};

export function PillButton({
  href,
  label,
  iconMask,
  iconOffsetX = 0,
  iconOffsetY = 0,
  iconScale = 1,
  backgroundColor = "#333",
  backgroundColorHovered = "#444",
  color = "#fff",
  textureInvert = "0",
  className,
  target = "_blank",
  rel = "noopener",
}: PillButtonProps) {
  const style: PillButtonStyleVars = {
    "--pill-bg": backgroundColor,
    "--pill-bg-hovered": backgroundColorHovered,
    "--pill-fg": color,
    "--pill-icon-offset-x": `${iconOffsetX}px`,
    "--pill-icon-offset-y": `${iconOffsetY}px`,
    "--pill-icon-scale": `${iconScale}`,
    "--texture-invert": `${textureInvert}`,
  };

  if (iconMask) {
    style["--pill-icon-mask"] = `url('${iconMask}')`;
  }

  const classes = className ? `pill-button ${className}` : "pill-button";

  return (
    <a className={classes} href={href} style={style} target={target} rel={rel}>
      {iconMask ? <span className="pill-button__iconWrap"><span className="pill-button__icon" aria-hidden="true" /></span> : null}
      <span className="pill-button__label">{label}</span>
    </a>
  );
}
