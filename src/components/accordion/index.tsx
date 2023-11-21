import IconComponent from "@/components/elements/icon";
import { useState } from "react";

type TAccordion = {
  title: string;
  content: string;
  icon: "transparent" | "profitability" | "engagement" | "limitless";
};

const Accordion = ({ title, content, icon }: TAccordion) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-custom-main py-8 w-full lg:max-w-[552px] relative">
      <button
        className="flex items-center justify-between cursor-pointer transition-all duration-300 ease-in-out"
        onClick={handleToggle}
      >
        <IconComponent name={icon} fill={isOpen} className="w-28 h-32" />

        <p className="text-lg lg:text-[22px] font-bold font-secondary text-left break-words max-w-[280px]  md:max-w-[336px] mr-auto hover:text-blue-base ml-8">
          {title}
        </p>
        <div className="absolute right-0">
          <span>
            {isOpen ? (
              <IconComponent name="chevronUp" />
            ) : (
              <IconComponent name="chevronDown" />
            )}
          </span>
        </div>
      </button>
      {isOpen && (
        <p className="mt-2 overflow-hidden overflow-y-scroll max-h-32 transition-all duration-500 ease-in w-3/4 ml-auto">
          {content}
        </p>
      )}
    </div>
  );
};

export default Accordion;
