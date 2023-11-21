"use client";

import withVideoBg from "../hoc/withVideoBg";
import CardsSection from "../sections/cards";
import HorizontalCards from "../sections/cards/horizontal-cards";
import Footer from "../sections/footer";
import Header from "../sections/header";
import Hero from "../sections/hero/index";
import TwoColumns from "../sections/two-columns";
const PageTemplate = () => {
  const HeroSection = withVideoBg(Hero, "/hero.mp4");
  const CardsSectionWithVideoBg = withVideoBg(
    CardsSection,
    "/horizontal-cards-bg.mp4",
  );

  const HorizontalCardWithVideoBg = withVideoBg(
    HorizontalCards,
    "/horizontal-cards-bg.mp4",
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
