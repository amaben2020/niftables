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
    <section className={twMerge("section-container", className)}>
      {children}
    </section>
  );
};

export default SectionContainer;
