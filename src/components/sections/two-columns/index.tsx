"use client";

import SectionContainer from "@/components/layout/SectionContainer";
import ColumnVariant1 from "./variant-1";
import ColumnVariant2 from "./variant-2";
import ColumnVariant3 from "./variant-3";

type TTwoColumns = {
  variant: "1" | "2" | "3";
};

const TwoColumns = ({ variant }: TTwoColumns) => {
  const renderColumnVariant = {
    "1": <ColumnVariant1 />,
    "2": <ColumnVariant2 />,
    "3": <ColumnVariant3 />,
  };

  const Component = renderColumnVariant[variant];
  return <SectionContainer>{Component}</SectionContainer>;
};

export default TwoColumns;
