import LinkPrimary from "@/components/elements/links/primary";
import TextCard from "@/components/elements/text-card";
import VideoComponent from "@/components/elements/video";
import useMediaQuery from "@/hooks/useMediaQuery";
import clsx from "clsx";
import { mobileTexts, texts } from "../mocks/data";

const ColumnVariant1 = () => {
  const isTablet = useMediaQuery(768);

  const VIDEO_URL =
    "https://res.cloudinary.com/dotcu0ow9/video/upload/v1700638062/rotating-device_axgx9x.mp4";

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:pb-20 lg:pb-28">
      <div className="col-span-2">
        <h2 className={clsx("border-main", "pb-8")}>creon pass nft</h2>
        <p className="gradient-text font-bold pt-8 pb-10">
          The Creon NFT pass unlocks access to AI projects, the Creon launchpad,
          and a ticket to generate passive income through AI-driven tools
        </p>

        <div className="md:hidden col-span-2 px-4">
          <VideoComponent url={VIDEO_URL} />
        </div>

        {!isTablet ? (
          <TextCard data={texts} variant="desktop" />
        ) : (
          <TextCard data={mobileTexts} variant="mobile" />
        )}

        <LinkPrimary variant="fill" text="Buy Creon Pass" to="#" />
      </div>

      <div className="hidden md:block md:col-span-2">
        <VideoComponent url={VIDEO_URL} />
      </div>
    </div>
  );
};

export default ColumnVariant1;
