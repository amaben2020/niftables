"use client";

import withVideoBg from "../hoc/withVideoBg";
import CardsSection from "../sections/cards";
import HorizontalCards from "../sections/cards/horizontal-cards";
import Footer from "../sections/footer";
import Header from "../sections/header";
import Hero from "../sections/hero/index";
import TwoColumns from "../sections/two-columns";
const PageTemplate = () => {
  const HERO_VIDEO_URL =
    "https://res.cloudinary.com/dotcu0ow9/video/upload/v1700638061/hero_txji7w.mp4";

  const HORIZONTAL_CARDS_VIDEO_URL =
    "https://res.cloudinary.com/dotcu0ow9/video/upload/v1700638114/horizontal-cards-bg_yiroza.mp4";

  const HeroSection = withVideoBg(Hero, HERO_VIDEO_URL);
  const CardsSectionWithVideoBg = withVideoBg(
    CardsSection,
    HORIZONTAL_CARDS_VIDEO_URL,
  );

  const HorizontalCardWithVideoBg = withVideoBg(
    HorizontalCards,
    HORIZONTAL_CARDS_VIDEO_URL,
  );
  return (
    <>
      <main>
        <Header />
        <section className="relative">
          <HeroSection gradient variant="hero" />
          <TwoColumns variant="1" />
          <TwoColumns variant="2" />
          <TwoColumns variant="3" />
          <CardsSectionWithVideoBg variant="cards" />
          <HorizontalCardWithVideoBg variant="horizontal" />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PageTemplate;
