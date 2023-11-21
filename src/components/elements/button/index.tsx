import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import styles from "./styles.module.css";

type TButton = {
  text?: string;
  variant?: "outline" | "fill";
  className?: string;
  children?: ReactNode;
};

const Button = ({
  children,
  text,
  variant,
  className,
  ...otherProps
}: TButton) => {
  return (
    <button
      {...otherProps}
      className={twMerge(styles.button, className)}
      data-variant={variant}
    >
      {text?.length || children ? (
        text ? (
          text
        ) : (
          children
        )
      ) : (
        <p>Insert a component</p>
      )}
    </button>
  );
};

export default Button;
