"use client";

import LinkPrimary from "@/components/elements/links/primary";
import TextCard from "@/components/elements/text-card";
import VideoComponent from "@/components/elements/video";
import SectionContainer from "@/components/layout/SectionContainer";
import useMediaQuery from "@/hooks/useMediaQuery";
import clsx from "clsx";

const texts = [
  "Pre-launch investment opportunities for upcoming AI projects",
  "Free and early access to Creon built AI projects",
  "Higher allocation limits on the Creon AI Launchpad",
  "Revenue share distribution from Creon built AI projects",
];

const mobileTexts = [
  "Prospect to derive financial benefits through the redistributed profit generated from AI tools, but only when the majority of NFT holders decide to release the tool publicly.",
  "The possibility of allocating investments into new, exceptional tokenized AI tools through Creon Launchpad.",
  "Early access to allocations in inspiring tokenized projects, real businesses based on AI.",
];

const TwoColumns = () => {
  const isTablet = useMediaQuery(768);
  return (
    <SectionContainer>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:pb-20 lg:pb-28">
        <div className="col-span-2">
          <h2 className={clsx("border-main", "pb-8")}>creon pass nft</h2>
          <p className="gradient-text font-bold pt-8 pb-10">
            The Creon NFT pass unlocks access to AI projects, the Creon
            launchpad, and a ticket to generate passive income through AI-driven
            tools
          </p>

          <div className="md:hidden col-span-2 px-4">
            <VideoComponent url="/rotating-device.mp4" />
          </div>

          {!isTablet ? (
            <TextCard data={texts} variant="desktop" />
          ) : (
            <TextCard data={mobileTexts} variant="mobile" />
          )}

          <LinkPrimary variant="fill" text="Buy Creon Pass" to="#" />
        </div>

        <div className="hidden md:block md:col-span-2">
          <VideoComponent url="/rotating-device.mp4" />
        </div>
      </div>
    </SectionContainer>
  );
};

export default TwoColumns;
