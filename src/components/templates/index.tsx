// pass down header data, footer data etc as props here {header, footer}
import Header from "../sections/header";
import Hero from "../sections/hero/index";
import TwoColumns from "../sections/two-columns";
const PageTemplate = (props: any) => {
  return (
    <>
      <main className="flex">
        <Header />
        <section className="relative">
          <Hero />
          <TwoColumns variant="1" />
          <TwoColumns variant="2" />
          <TwoColumns variant="3" />

          {/* {TWO_COLUMN_VARIANTS.map((variant: "1" | "2" | "3") => (
            <TwoColumns variant={variant} key={variant} />
          ))} */}
        </section>
      </main>
      <footer>FOOTER COMPONENT</footer>
    </>
  );
};

export default PageTemplate;
