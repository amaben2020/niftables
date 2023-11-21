import HorizontalCard from "@/components/elements/horizontal-card";
import SectionContainer from "@/components/layout/SectionContainer";

const HorizontalCards = () => {
  return (
    <SectionContainer>
      <HorizontalCard />
      {/* <div className="flex gap-x-5 2xl:gap-x-10 max-w-[90vw] justify-start xl:justify-center mx-auto ">
        <HorizontalCard />
      </div> */}
    </SectionContainer>
  );
};

export default HorizontalCards;
