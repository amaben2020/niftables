import Button from "@/components/elements/button";
import IconComponent from "@/components/elements/icon";
import CustomLink from "@/components/elements/links";
import SocialIcons from "@/components/elements/social-icons";
import { socialLinks } from "@/components/elements/social-icons/mocks/data";
import clsx from "clsx";
import Link from "next/link";
import { mobileDrawer } from "./mocks/mobileDrawer";
import styles from "./styles.module.css";
const MobileHeader = ({
  isOpen,
  handleIsOpen,
}: {
  isOpen: boolean;
  handleIsOpen: () => void;
}) => {
  return (
    <div
      id="menu"
      className={clsx(
        isOpen ? "flex animate-openmenu" : "hidden",
        "animate-closemenu lg:hidden block",
        styles.drawer,
      )}
    >
      <div className={styles["drawer-container"]}>
        <div className={styles["drawer-heading"]}>
          <CustomLink variant="outline" text="Connect" to="#" />
          <Button className={styles.hamburger} onClick={handleIsOpen}>
            <IconComponent name="hamburgerClose" />
          </Button>
        </div>

        <ul className={styles.links}>
          {mobileDrawer.map((link) => (
            <li
              key={link.title}
              className={clsx(styles.link, "border-custom-main")}
            >
              <Link href={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.socials}>
          <SocialIcons links={socialLinks} />
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
