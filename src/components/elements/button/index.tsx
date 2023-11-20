import { twMerge } from "tailwind-merge";
import styles from "./styles.module.css";

type TButton = {
  text: string;
  variant: "outline" | "fill";
  className: string;
};

const Button = ({ text, variant, className, ...otherProps }: TButton) => {
  return (
    <button
      {...otherProps}
      className={twMerge(styles.button, className)}
      data-variant={variant}
    >
      {text}
    </button>
  );
};

export default Button;
