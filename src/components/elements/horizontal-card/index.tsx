import useMediaQuery from "@/hooks/useMediaQuery";
import { truncateText } from "@/utils/truncateText";
import clsx from "clsx";
import { StaticImageData } from "next/image";
import CustomImageWithOpacity from "../custom-image/image";
import styles from "./styles.module.css";
type THorizontalCards = {
  title: string;
  description: string;
  image: StaticImageData | string;
};

const HorizontalCard = ({ title, description, image }: THorizontalCards) => {
  const isTablet = useMediaQuery(1024);
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h3 className={styles.title}>{title}</h3>
          <p>{isTablet ? truncateText(description, 550) : description}</p>
        </div>
        <div
          className={clsx(
            styles["image-container"],
            "rounded-r-md max-h-content",
          )}
        >
          <CustomImageWithOpacity
            image={image as StaticImageData}
            width={453}
            height={302}
            className={clsx(styles.image, "rounded-r-md")}
          />
        </div>
      </div>
    </>
  );
};

export default HorizontalCard;
