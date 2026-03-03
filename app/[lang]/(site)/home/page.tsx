import { HeroBanner } from "./hero-banner";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center w-full gap-8" style={{ paddingTop: "1rem", paddingBottom: "2rem", paddingLeft: "2rem", paddingRight: "2rem" }}>
      <HeroBanner />
    </main>
  );
}
