import useMediaQuery from "@/hooks/useMediaQuery";
import { truncateText } from "@/utils/truncateText";
import { StaticImageData } from "next/image";
import CustomImageWithOpacity from "../custom-image/image";

type THorizontalCards = {
  title: string;
  description: string;
  image: StaticImageData | string;
};

const HorizontalCard = ({ title, description, image }: THorizontalCards) => {
  const isTablet = useMediaQuery(1024);
  return (
    <>
      <div className="min-w-full opacity-95 bg-black-secondary   grid md:grid-cols-3 relative md:h-[390px] xl:h-[310px] rounded-md overflow-hidden">
        <div className="md:px-[20px] px-[24px] xl:px-[40px] py-10 col-span-3 md:col-span-2 md:order-1 order-2">
          <h3 className="font-primary text-white text-3xl md:text-4xl uppercase">
            {title}
          </h3>
          <p>{isTablet ? truncateText(description, 550) : description}</p>
        </div>
        <div className="max-h-content col-span-3 md:col-span-1 md:order-2 order-1 min-w-full rounded-r-md">
          <CustomImageWithOpacity
            image={image as StaticImageData}
            width={453}
            height={302}
            className="min-w-full xl:h-[310px] h-[159px]  md:h-[390px] object-cover rounded-r-md"
          />
        </div>
      </div>
    </>
  );
};

export default HorizontalCard;
