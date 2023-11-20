import TextCard from "@/components/elements/text-card";
import VideoComponent from "@/components/elements/video";
import SectionContainer from "@/components/layout/SectionContainer";
import clsx from "clsx";
const TwoColumns = () => {
  return (
    <SectionContainer>
      <div className="grid grid-cols-4 gap-10">
        <div className="col-span-2">
          <h2 className={clsx("border-main", "pb-8")}>creon pass nft</h2>
          <p className="gradient-text font-bold pt-8 pb-10">
            The Creon NFT pass unlocks access to AI projects, the Creon
            launchpad, and a ticket to generate passive income through AI-driven
            tools
          </p>

          <TextCard />
          <TextCard />
          <TextCard />
          <TextCard />
          <button>BUT JSJS ASJ</button>
        </div>

        <div className="col-span-2">
          <VideoComponent url="/rotating-device.mp4" />
        </div>
      </div>
    </SectionContainer>
  );
};

export default TwoColumns;
