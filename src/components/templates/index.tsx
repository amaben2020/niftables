"use client";

import { VIDEO_LINKS } from "@/assets/videos";
import withVideoBg from "../hoc/withVideoBg";
import CardsSection from "../sections/cards";
import HorizontalCards from "../sections/cards/horizontal-cards";
import Footer from "../sections/footer";
import Header from "../sections/header";
import Hero from "../sections/hero/index";
import TwoColumns from "../sections/two-columns";
const PageTemplate = () => {
  const HeroSection = withVideoBg(Hero, VIDEO_LINKS.hero);
  const CardsSectionWithVideoBg = withVideoBg(
    CardsSection,
    VIDEO_LINKS.horizontalCards,
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
