import HorizontalCard from "@/components/elements/horizontal-card";
import SectionContainer from "@/components/layout/SectionContainer";
import { horizontalCardsData } from "./mocks/data";
const HorizontalCards = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col gap-y-5">
        {horizontalCardsData.map((item) => (
          <HorizontalCard
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default HorizontalCards;
