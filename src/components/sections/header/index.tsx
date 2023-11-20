"use client";
import clsx from "clsx";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleHeaderOpen = () => setIsOpen((p) => !p);
  return (
    <header className="absolute z-20 top-10">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-xl">Your Logo</div>
        <button
          onClick={handleHeaderOpen}
          id="menu-toggle"
          className="lg:hidden focus:outline-none border"
        >
          <svg
            className="w-6 h-6 fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M3 12h18m-18 5h18m-18-10h18"></path>
          </svg>
        </button>
        <div className="hidden lg:flex space-x-4">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            About
          </a>
          <a href="#" className="text-white">
            Services
          </a>
          <a href="#" className="text-white">
            Contact
          </a>
        </div>
      </div>
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
            Home
          </a>
          <a href="#" className="text-white">
            About
          </a>
          <a href="#" className="text-white">
            Services
          </a>
          <a href="#" className="text-white">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
