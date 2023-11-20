import Image, { StaticImageData } from "next/image";
import styles from "./styles.module.css";
type TCustomImage = {
  image: StaticImageData;
};

const CustomImageWithOpacity = ({ image }: TCustomImage) => {
  return (
    <div className={styles.container}>
      <Image src={image} width={950} height={485} alt="" />
    </div>
  );
};

export default CustomImageWithOpacity;
