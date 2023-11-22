"use client";
import Button from "@/components/elements/button";
import IconComponent from "@/components/elements/icon";
import CustomLink from "@/components/elements/links";
import { useOnClickOutside } from "@/hooks/useClickOutside";
import useMediaQuery from "@/hooks/useMediaQuery";
import clsx from "clsx";
import Link from "next/link";
import { useRef, useState } from "react";
import MobileHeader from "./mobile/MobileHeader";
import { headerData } from "./mocks/data";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuOpen = () => setIsOpen((p) => !p);

  const isMobile = useMediaQuery(1024);

  const ref = useRef(null);

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <header className="absolute z-20 top-10" ref={ref}>
      <div className="px-[15px] md:px-8 lg:px-14 flex justify-between items-center w-[100vw]">
        {isOpen && (
          <div
            className="fixed block lg:hidden inset-0 bg-black bg-opacity-60 z-10"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
        <div>
          <IconComponent name="logo" />
        </div>
        <div className={clsx("hidden lg:flex ml-auto")}>
          {headerData.map((data) =>
            data.isAvailable ? (
              <Link href={data.url} key={data.id}>
                <p className="hover:text-blue-base cursor-default">
                  {data.title}{" "}
                </p>
              </Link>
            ) : (
              <Link href={data.url} key={data.id} className="relative mx-12">
                <p className=" hover:text-blue-500 cursor-default">
                  {data.title}
                </p>

                <span className="text-pink-base px-1 pt-0.5 pb-[1px] bg-black  absolute -right-11 rounded-[100px] -top-0.5 text-xs font-bold">
                  Soon
                </span>
              </Link>
            ),
          )}
        </div>{" "}
        {!isMobile && (
          <CustomLink
            variant="outline"
            text="Connect"
            className="ml-auto lg:ml-16"
            to="#"
          />
        )}
        {isMobile && (
          <div className="flex gap-x-5 items-center">
            <CustomLink
              variant="outline"
              text="Connect"
              className="ml-auto lg:ml-16"
              to="#"
            />
            <Button
              onClick={handleMenuOpen}
              className="lg:hidden focus:outline-none ml-5"
            >
              <IconComponent name="hamburger" />
            </Button>
          </div>
        )}
      </div>

      <MobileHeader handleIsOpen={handleMenuOpen} isOpen={isOpen} />
    </header>
  );
};

export default Header;
