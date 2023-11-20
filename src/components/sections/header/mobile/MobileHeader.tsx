import clsx from "clsx";

const MobileHeader = ({ isOpen, onClick, ref }: { isOpen: boolean }) => {
  // TODO: add click-outside
  return (
    <div
      ref={ref}
      id="menu"
      className={clsx(
        isOpen ? "flex" : "hidden",
        "ml-auto fixed w-[50%] inset-0 bg-black z-50 right-0",
      )}
      onClick={onClick}
    >
      <div className="flex flex-col">
        <div> Buttons </div>

        <div className="flex-col items-center space-y-4">
          <a href="#" className="text-white">
            Mobile
          </a>
          <a href="#" className="text-white">
            M2
          </a>
          <a href="#" className="text-white">
            Services
          </a>
          <a href="#" className="text-white">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
