import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const SectionContainer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={twMerge("section-container", className)}>{children}</div>
  );
};

export default SectionContainer;
