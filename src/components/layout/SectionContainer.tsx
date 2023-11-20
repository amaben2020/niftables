import { ReactNode } from "react";

const SectionContainer = ({ children }: { children: ReactNode }) => {
  return <section className="section-container">{children}</section>;
};

export default SectionContainer;
