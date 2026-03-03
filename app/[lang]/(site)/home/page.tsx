import { HeroBanner } from "./hero-banner";
import HomeInfo from "./home-info";
import "./home.scss";

export default function HomePage() {
  return (
    <main className="home-page">
      <HeroBanner />
      <HomeInfo />
    </main>
  );
}
