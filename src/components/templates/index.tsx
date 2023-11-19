// pass down header data, footer data etc as props here {header, footer}

const PageTemplate = (props: any) => {
  return (
    <>
      <h2> Seo Component</h2>
      <p className="font-secondary">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        corporis minus nesciunt numquam incidunt quaerat facilis magnam, iste,
        quisquam, assumenda explicabo est! Sint minima adipisci rerum rem a
        quisquam earum?
      </p>
      <p className="font-secondary-bold">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        corporis minus nesciunt numquam incidunt quaerat facilis magnam, iste,
        quisquam, assumenda explicabo est! Sint minima adipisci rerum rem a
        quisquam earum?
      </p>
      <p className="font-primary">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        corporis minus nesciunt numquam incidunt quaerat facilis magnam, iste,
        quisquam, assumenda explicabo est! Sint minima adipisci rerum rem a
        quisquam earum?
      </p>
      <header>HEADER COMPONENT</header>
      <main> Use the layout wrapper here</main>
      <footer>FOOTER COMPONENT</footer>
    </>
  );
};

export default PageTemplate;
