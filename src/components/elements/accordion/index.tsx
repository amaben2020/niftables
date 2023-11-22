import IconComponent from "@/components/elements/icon";
import { useState } from "react";
import styles from "./styles.module.css";
type TAccordion = {
  title: string;
  content: string;
  icon: "transparent" | "profitability" | "engagement" | "limitless";
};

const Accordion = ({ title, content, icon }: TAccordion) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={handleToggle}>
        <IconComponent name={icon} fill={isOpen} className={styles.icon} />

        <p className={styles.title}>{title}</p>
        <div className={styles.chevron}>
          <span>
            {isOpen ? (
              <IconComponent name="chevronUp" />
            ) : (
              <IconComponent name="chevronDown" />
            )}
          </span>
        </div>
      </button>
      {isOpen && <p className={styles.content}>{content}</p>}
    </div>
  );
};

export default Accordion;
