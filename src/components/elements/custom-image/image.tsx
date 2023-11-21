import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";
import styles from "./styles.module.css";
type TCustomImage = {
  image: StaticImageData;
  width?: number;
  height?: number;
  className?: string;
};

const CustomImageWithOpacity = ({
  image,
  width = 950,
  height = 485,
  className,
}: TCustomImage) => {
  return (
    <div className={twMerge(styles.container, className)}>
      <Image
        src={image}
        width={width}
        height={height}
        alt=""
        className={className}
      />
    </div>
  );
};

export default CustomImageWithOpacity;
