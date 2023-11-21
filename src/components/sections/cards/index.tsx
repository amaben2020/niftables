import Card from "@/components/elements/card";
import SectionContainer from "@/components/layout/SectionContainer";
import { cardsData } from "./mocks/data";

const CardsSection = () => {
  return (
    <SectionContainer className="overflow-x-auto whitespace-no-wrap">
      <div className="flex gap-x-5 2xl:gap-x-10 max-w-[90vw] justify-start xl:justify-center mx-auto ">
        {cardsData.map(({ title, id, description, subtitle, image }) => (
          <Card
            key={id}
            title={title}
            description={description}
            subtitle={subtitle}
            image={image}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default CardsSection;
