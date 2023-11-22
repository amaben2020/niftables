import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import styles from "./styles.module.css";

type TCard = {
  title: string;
  image: StaticImageData;
  description: string;
  subtitle: string;
};

const Card = ({ title, image, description, subtitle }: TCard) => {
  return (
    <div
      className={clsx(
        styles["card-zoom"],
        "rounded-md min-w-[308px] md:min-w-[450px] 2xl:min-w-0 w-0 2xl:w-[450px] h-[659px] bg-black-quaternary md:bg-black-secondary pt-5 pb-7 relative",
      )}
    >
      <div className="pt-4 px-6 flex flex-col gap-y-5">
        <p className="font-primary text-3xl md:text-4xl uppercase z-10">
          {title}
        </p>
        <p className="text-lg lg:text-[22px] font-bold font-secondary gradient-text text-left ">
          {subtitle}
        </p>
      </div>

      <div className="absolute top-[15%]">
        <div className="relative h-[180px] md:h-[233px] lg:h-auto max-w-[295px] sm:max-w-[310px] md:max-w-[423px] overflow-hidden rounded-r-md mt-20 mb-10">
          <Image
            src={image}
            width={423}
            alt=""
            height={234}
            className={styles["card-zoom-image"]}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-700 mix-blend-color"></div>
        </div>
      </div>

      <div className="px-6 text-white bottom-48 md:bottom-14 absolute h-[87px] md:h-0 min-h-0 md:min-h-[161px]">
        <p className="leading-[130%]">{description}</p>
      </div>

      <div className="absolute -top-3 right-8 bg-white rounded-[100px] text-xs font-bold text-black font-secondary py-[3px] px-[6px]">
        Coming soon
      </div>
    </div>
  );
};

export default Card;
