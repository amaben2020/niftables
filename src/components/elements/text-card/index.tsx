import clsx from "clsx";
import styles from "./styles.module.css";

type TTextCard = {
  data: string[];
  variant?: "mobile" | "desktop";
};

const TextCard = ({ data, variant }: TTextCard) =>
  variant === "desktop" ? (
    data.map((text) => (
      <div className={clsx(styles["text-card"], "border-main")} key={text}>
        <p>{text}</p>
      </div>
    ))
  ) : (
    <div className={styles.container}>
      {data.map((text, index) => (
        <div
          className={clsx(
            index === 0 ? styles["main-card"] : styles["sub-card"],
            styles.item,
            "border-main",
          )}
          key={text}
        >
          <p>{text}</p>
        </div>
      ))}
    </div>
  );

export default TextCard;
