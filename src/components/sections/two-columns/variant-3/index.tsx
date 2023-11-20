import alienImage from "@/assets/images/alien-tomb.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import Accordion from "../../accordion";
const ColumnVariant3 = () => {
  const isTablet = useMediaQuery(1024);

  return (
    <div className="grid grid-cols-3 relative gap-10 min-h-[90vh]">
      <div className="col-span-2">
        <h3 className="font-primary text-4xl leading-[120%] uppercase z-10 break-words">
          <span className="text-white">
            Our vision is to support the innovation of AI blockchain projects
          </span>{" "}
          <span className="gradient-text">
            while prioritizing communities and democratizing profits
          </span>
        </h3>
      </div>

      <div className="col-span-1 z-10">
        <Accordion />
      </div>
      {/* 
      <div className="absolute bottom-0 left-[10%]">
        <Image src={alienImage} width={836} height={500} alt="" />
      </div> */}

      <div className="absolute top-[25%] left-[25%]">
        <Image src={alienImage} width={836} height={500} alt="" />
      </div>
    </div>
  );
};

export default ColumnVariant3;
