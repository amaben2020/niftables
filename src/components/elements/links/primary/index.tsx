import clsx from "clsx";
import Link from "next/link";
import styles from "./styles.module.css";
const LinkPrimary = ({ variant }: { variant: any }) => {
  return (
    <Link href="#">
      <p className={clsx(styles.btn, styles.next)} data-variant={variant}></p>
    </Link>
  );
};

export default LinkPrimary;
