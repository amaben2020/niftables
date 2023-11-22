import Card from "@/components/elements/card";
import SectionContainer from "@/components/layout/SectionContainer";
import useMediaQuery from "@/hooks/useMediaQuery";
import clsx from "clsx";
import { cardsData } from "./mocks/data";
import styles from "./styles.module.css";
const CardsSection = () => {
  const isTablet = useMediaQuery(1024);
  return (
    <SectionContainer className={clsx(styles.wrapper, "whitespace-no-wrap")}>
      <div className={styles.container}>
        {cardsData.map(
          ({ title, id, description, subtitle, image, imageMobile }) => (
            <Card
              key={id}
              title={title}
              description={description}
              subtitle={subtitle}
              image={isTablet ? imageMobile : (image as any)}
            />
          ),
        )}
      </div>
    </SectionContainer>
  );
};

export default CardsSection;
