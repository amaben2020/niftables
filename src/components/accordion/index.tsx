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
    <div className="border-b border-custom-main py-8 w-full lg:max-w-[552px] relative ">
      <button
        className="flex items-center justify-between cursor-pointer transition-all duration-300 ease-in-out gap-5 "
        onClick={handleToggle}
      >
        <IconComponent name={icon} fill={isOpen} className="w-28 h-32 mr-5" />

        <p className="text-lg lg:text-[22px] font-bold font-secondary text-left break-words lg:max-w-[336px] mr-auto hover:text-blue-base">
          {title} Profitability and Growth{" "}
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
        <p className="mt-2 overflow-hidden transition-all duration-500 ease-in">
          {content}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem,
          nobis! Ad nihil deserunt repudiandae temporibus inventore expedita
          neque facere, repellat architecto ipsum corporis ipsa quaerat
          praesentium labore. Dolores, labore tenetur?
        </p>
      )}
    </div>
  );
};

export default Accordion;
