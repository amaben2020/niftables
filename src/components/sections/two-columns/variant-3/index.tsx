import alienImage from "@/assets/images/alien-tomb.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import Accordion from "../../accordion";
const ColumnVariant3 = () => {
  const isTablet = useMediaQuery(1024);

  return (
    <div className="grid grid-cols-2 relative gap-x-5 lg:gap-x-10 min-h-[100vh] lg:min-h-[90vh]">
      <div className="col-span-1 z-10">
        {!isTablet ? (
          <h3 className="font-primary text-4xl leading-[120%] uppercase z-10 break-words">
            <span className="text-white">
              Our vision is to support the innovation of AI blockchain projects
            </span>{" "}
            <span className="gradient-text">
              while prioritizing communities and democratizing profits
            </span>
          </h3>
        ) : (
          <h3 className="bg-gradient-to-r from-blue-500 to-purple-700 text-transparent bg-clip-text uppercase font-primary text-[28px] leading-[120%]">
            our mission is to provide unique, confidential AI-based tools, to
            which you will gain lifetime access through NFT tokens and our CREON
            token.
          </h3>
        )}
      </div>

      <div className="col-span-1 z-10">
        <Accordion />
      </div>
      {/* 
      <div className="absolute bottom-0 left-[10%]">
        <Image src={alienImage} width={836} height={500} alt="" />
      </div> */}

      <div className="absolute lg:top-[35%] top-[80%] left-[50%] sm:left-[-40%] lg:left-[20%]">
        <Image
          src={alienImage}
          width={836}
          height={500}
          alt=""
          className="w-full"
        />
      </div>
    </div>
  );
};

export default ColumnVariant3;