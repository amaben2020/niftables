import Button from "@/components/elements/button";
import IconComponent from "@/components/elements/icon";
import CustomLink from "@/components/elements/links";
import SocialIcons from "@/components/elements/social-icons";
import { socialLinks } from "@/components/elements/social-icons/mocks/data";
import clsx from "clsx";
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

        <div className={styles.links}>
          <a href="#" className={clsx(styles.link, "border-custom-main")}>
            Creon Pass
          </a>
          <a href="#" className={clsx(styles.link, "border-custom-main")}>
            Token
          </a>
          <a href="#" className={clsx(styles.link, "border-custom-main")}>
            AI Income
          </a>
          <a href="#" className={clsx(styles.link, "border-custom-main")}>
            AL Launchpad
          </a>
        </div>
        <div className={styles.socials}>
          <SocialIcons links={socialLinks} />
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
