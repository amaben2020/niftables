import Link from "next/link";
import IconComponent from "../icon";

export type TSocialLink = {
  url: string;
  name: "discord" | "telegram" | "twitter";
};

const SocialIcons = ({ links }: { links: TSocialLink[] }) => {
  return (
    <span className="flex items-center gap-3">
      {links.map((link) => (
        <Link href={link.url} key={link.url}>
          <IconComponent name={link.name} />
        </Link>
      ))}
    </span>
  );
};

export default SocialIcons;
