import Image, { StaticImageData } from "next/image";
import styles from "./styles.module.css";
type TCustomImage = {
  image: StaticImageData;
  width?: number;
  height?: number;
};

const CustomImageWithOpacity = ({
  image,
  width = 950,
  height = 485,
}: TCustomImage) => {
  return (
    <div className={styles.container}>
      <Image src={image} width={width} height={height} alt="" />
    </div>
  );
};

export default CustomImageWithOpacity;
