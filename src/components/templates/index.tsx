import CardsSection from "../sections/cards";
import Footer from "../sections/footer";
import Header from "../sections/header";
import Hero from "../sections/hero/index";
import TwoColumns from "../sections/two-columns";
const PageTemplate = () => {
  return (
    <>
      <main className="flex">
        <Header />
        <section className="relative">
          <Hero />
          <TwoColumns variant="1" />
          <TwoColumns variant="2" />
          <TwoColumns variant="3" />
          <CardsSection />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PageTemplate;
