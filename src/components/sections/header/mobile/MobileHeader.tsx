import clsx from "clsx";

const MobileHeader = ({ isOpen }: { isOpen: boolean }) => {
  // TODO: add click-outside
  return (
    <div
      id="menu"
      className={clsx(
        isOpen ? "flex" : "hidden",
        "ml-auto fixed w-[50%] inset-0 bg-black z-50 right-0",
      )}
    >
      <div className="flex items-center justify-end p-4">
        <button id="close-menu" className="text-white focus:outline-none">
          <svg
            className="w-6 h-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <div className="flex flex-col items-center space-y-4">
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
  );
};

export default MobileHeader;
