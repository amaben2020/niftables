import Button from "@/components/elements/button";
import IconComponent from "@/components/elements/icon";
import LinkPrimary from "@/components/elements/links/primary";
import clsx from "clsx";

const MobileHeader = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      id="menu"
      className={clsx(
        isOpen ? "flex  animate-openmenu" : "hidden",
        "ml-auto fixed w-[60%] inset-0 bg-black z-50 right-0 pl-10 py-5 animate-closemenu  ",
      )}
    >
      <div className="flex flex-col w-full">
        <div className="flex items-center mb-8">
          <LinkPrimary variant="outline" text="Connect" to="#" />
          <Button className="ml-2">
            <IconComponent name="hamburgerClose" />
          </Button>
        </div>

        <div className="flex flex-col items-start font-secondary text-base font-bold text-left ">
          <a
            href="#"
            className="text-white py-4 border-y border-custom-main w-full"
          >
            Creon Pass
          </a>
          <a
            href="#"
            className="text-white py-4 border-y border-custom-main w-full"
          >
            Token
          </a>
          <a
            href="#"
            className="text-white py-4 border-y border-custom-main w-full"
          >
            AI Income
          </a>
          <a
            href="#"
            className="text-white py-4 border-y border-custom-main w-full"
          >
            AL Launchpad
          </a>
        </div>

        <div>
          <p> SOCIALS</p>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
