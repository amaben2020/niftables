import img from "@/assets/images/ai-cloud-concept-with-robot-head 1.png";
import CustomImageWithOpacity from "../custom-image/image";
const HorizontalCard = () => {
  // <div className="min-h-[302px] md:min-h-0 max-h-0 lg:max-h-[302px] min-w-full opacity-95 bg-black-secondary  grid md:grid-cols-3">
  return (
    <>
      <div className="min-w-full opacity-95 bg-black-secondary  grid md:grid-cols-3">
        <div className="px-[24px] md:px-[40px] py-10 col-span-3 md:col-span-2 md:order-1 order-2">
          <h3 className="font-primary text-white text-3xl md:text-4xl uppercase">
            AI Prospects, Market Size, and Development Pace
          </h3>
          <p>
            The AI market is one of the most dynamically growing areas of
            technology. According to reports, the global AI market is expected
            to reach $190.61 billion by 2025, with a CAGR (Compound Annual
            Growth Rate) of 36.6%. The key drivers behind this growth include
            advancements in machine learning, increasing demand for big data
            analytics, and growing adoption of AI technology across various
            sectors such as healthcare, finance, and transportation.
          </p>
        </div>
        <div className="col-span-3 md:col-span-1 md:order-2 order-1 min-w-full min-h-full">
          <CustomImageWithOpacity
            image={img}
            width={453}
            height={302}
            className="min-w-full max-h-[302px]"
            // className="min-w-full md:max-w-[453px] max-h-[302px]"
          />
        </div>
      </div>
    </>
  );
};

export default HorizontalCard;
