import Link from "next/link";
import IconComponent from "../icon";
import styles from "./styles.module.css";

export type TSocialLink = {
  url: string;
  name: "discord" | "telegram" | "twitter";
};

const SocialIcons = ({ links }: { links: TSocialLink[] }) => {
  return (
    <span className={styles.wrapper}>
      {links.map((link) => (
        <Link href={link.url} key={link.url}>
          <IconComponent name={link.name} />
        </Link>
      ))}
    </span>
  );
};

export default SocialIcons;
