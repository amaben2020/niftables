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

  return (
    <>
      <main>
        <Header />
        <section className="relative flex flex-col">
          <HeroSection gradient variant="hero" />
          <section className="flex flex-col order-4 lg:order-1">
            <TwoColumns variant="1" />
          </section>

          <section className="flex flex-col order-2 lg:order-2">
            {" "}
            <TwoColumns variant="2" />
          </section>

          <section className="flex flex-col order-1 lg:order-3">
            <TwoColumns variant="3" />
          </section>

          <section className="flex flex-col order-5 lg:order-4">
            <CardsSectionWithVideoBg variant="cards" />
          </section>

          <section className="flex flex-col order-3 lg:order-5">
            <HorizontalCards />
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PageTemplate;
