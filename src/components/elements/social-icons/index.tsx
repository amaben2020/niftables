import Link from "next/link";
import IconComponent from "../icon";
import styles from "./styles.module.css";

export type TSocialLink = {
  url: string;
  name: "discord" | "telegram" | "twitter";
};

const SocialIcons = ({ links }: { links: TSocialLink[] }) => {
  return (
    <ul className={styles.wrapper}>
      {links.map((link) => (
        <li key={link.url}>
          <Link href={link.url}>
            <IconComponent name={link.name} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;
