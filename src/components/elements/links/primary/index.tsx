import clsx from "clsx";
import Link from "next/link";
import styles from "./styles.module.css";
const LinkPrimary = ({
  variant,
  className,
  text,
  to,
}: {
  variant: "fill" | "outline";
  text: string;
  to: string;
  className?: string;
}) => {
  return (
    <Link href={to}>
      <p
        className={clsx(styles.link, styles.next, className)}
        data-variant={variant}
        data-text={text}
      ></p>
    </Link>
  );
};

export default LinkPrimary;
