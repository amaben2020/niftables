import alienImage from "@/assets/images/alien-off.png";
import clsx from "clsx";
import Image from "next/image";
import styles from "./styles.module.css";

const Card = () => {
  return (
    <div
      className={clsx(
        styles["card-zoom"],
        "rounded-md max-w-[450px] bg-black-secondary pt-5 pb-7 relative",
      )}
    >
      <div className="pt-4 px-6 pb-12 flex flex-col gap-y-5">
        <p className="font-primary text-4xl uppercase z-10">token</p>
        <p className="text-lg lg:text-[22px] font-bold font-secondary gradient-text text-left ">
          The Gateway token to the world of AI
        </p>
      </div>

      <div className="relative max-w-[423px] overflow-hidden">
        <Image
          src={alienImage}
          width={423}
          alt=""
          height={234}
          className={clsx(styles["card-zoom-image"])}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-700 mix-blend-color"></div>
      </div>

      <div className="p-6 text-white">
        <p className="leading-[130%]">
          Set to debut in the latter half of 2024, the CREON token serves as the
          pioneering link between cutting-edge AI initiatives and blockchain
          technology. This innovative token provides NFT and token holders with
          unparalleled access to our Launchpad, AI tools, and exclusive
          pre-launch investment prospects.
        </p>
      </div>

      <div className="absolute -top-3 right-8 bg-white rounded-[100px] text-xs font-bold text-black font-secondary py-[3px] px-[6px]">
        Coming soon
      </div>
    </div>
  );
};

export default Card;
