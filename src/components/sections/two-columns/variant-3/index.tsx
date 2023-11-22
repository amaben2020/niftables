import { IMAGES } from "@/assets/images/images";
import Accordion from "@/components/elements/accordion";
import { accordionData } from "@/components/elements/accordion/mocks/data";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
const ColumnVariant3 = () => {
  const isTablet = useMediaQuery(768);

  return (
    <div className="grid grid-cols-2 relative gap-x-5 lg:gap-x-10 overflow-hidden">
      <div className=" col-span-2 lg:col-span-1 z-10">
        <h3 className="font-primary text-[28px] lg:text-4xl leading-[120%] uppercase z-10 break-words block md:hidden xl:block">
          <span className="text-white">
            Our vision is to support the innovation of AI blockchain projects
          </span>{" "}
          <span className="gradient-text">
            while prioritizing communities and democratizing profits
          </span>
        </h3>
        <>
          <h3 className="bg-gradient-to-r from-blue-500 to-purple-700 text-transparent bg-clip-text uppercase font-primary text-[28px] leading-[120%] hidden md:block xl:hidden">
            Our mission is to provide unique, confidential AI-based tools, to
            which you will gain lifetime access through NFT tokens and our CREON
            token.
          </h3>

          {isTablet && (
            <div className="ml-auto w-full max-w-sm">
              <Image
                src={IMAGES.alienTomb}
                width={436}
                height={500}
                alt=""
                className="w-full bg-gradient-to-r from-black via-black to-transparent"
              />
            </div>
          )}
        </>
      </div>

      <div className="col-span-2 md:col-span-1 z-10 lg:justify-self-end">
        {accordionData.map((item) => (
          <Accordion
            title={item.title}
            content={item.content}
            icon={item.icon as any}
            key={item.id}
          />
        ))}
      </div>
      {!isTablet && (
        <div className="absolute -bottom-5 md:left-80 lg:-left-20 xl:left-[8%] md:w-[600px] lg:w-[836px]">
          <Image
            src={IMAGES.alienTomb}
            width={836}
            height={500}
            alt=""
            className="w-full bg-gradient-to-r from-black via-black to-transparent"
          />
        </div>
      )}
    </div>
  );
};

export default ColumnVariant3;
