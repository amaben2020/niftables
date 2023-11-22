import IconComponent from "@/components/elements/icon";
import SocialIcons from "@/components/elements/social-icons";
import { socialLinks } from "@/components/elements/social-icons/mocks/data";
import styles from "./styles.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <div className={styles.arrangement}>
          <p className={styles.rights}>© Creon 2023. All rights reserved.</p>
        </div>

        <div className={styles["alternating-arrangement"]}>
          <SocialIcons links={socialLinks} />
        </div>
      </div>

      <div>
        <span className={styles.company}>
          <p className={styles.powered}>Powered by</p>
          <IconComponent name="niftables" />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
