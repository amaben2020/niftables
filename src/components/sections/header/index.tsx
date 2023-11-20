"use client";
import Button from "@/components/elements/button";
import IconComponent from "@/components/elements/icon";
import LinkPrimary from "@/components/elements/links/primary";
import Link from "next/link";
import { useState } from "react";
import MobileHeader from "./mobile/MobileHeader";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleHeaderOpen = () => setIsOpen((p) => !p);
  return (
    <header className="absolute z-20 top-10">
      <div className="px-[15px] md:px-[30px] lg:px-14 flex justify-between items-center w-[100vw]">
        <div>
          <IconComponent name="logo" />
        </div>
        <div className="hidden lg:flex ml-auto space-x-10">
          <Link href="#" className="text-white hover:text-blue-500">
            <p className=" hover:text-blue-500 cursor-default">Mobile </p>
          </Link>
          <Link href="#">
            <p className=" hover:text-blue-500 cursor-default">About </p>
          </Link>
        </div>{" "}
        <Button variant="outline" text="Connect" className="ml-auto lg:ml-16" />
        <button
          onClick={handleHeaderOpen}
          id="menu-toggle"
          className="lg:hidden focus:outline-none ml-5"
        >
          <IconComponent name="hamburger" />
        </button>
      </div>

      <LinkPrimary variant="outline" />

      <MobileHeader isOpen={isOpen} />
    </header>
  );
};

export default Header;
