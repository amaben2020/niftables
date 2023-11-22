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
import styles from "./styles.module.css";

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
    <header className={styles.header} ref={ref}>
      <div className={styles.container}>
        {isOpen && (
          <div className={styles.button} onClick={() => setIsOpen(false)}></div>
        )}
        <div>
          <IconComponent name="logo" />
        </div>
        <div className={styles.info}>
          {headerData.map((data) =>
            data.isAvailable ? (
              <Link href={data.url} key={data.id}>
                <p className={styles.link}>{data.title} </p>
              </Link>
            ) : (
              <Link href={data.url} key={data.id} className="relative mx-12">
                <p className={styles.link2}>{data.title}</p>

                <span className={styles.soon}>Soon</span>
              </Link>
            ),
          )}
        </div>{" "}
        {!isMobile && (
          <CustomLink
            variant="outline"
            text="Connect"
            className={styles.btn}
            to="#"
          />
        )}
        {isMobile && (
          <div className={styles["btn-wrapper"]}>
            <CustomLink
              variant="outline"
              text="Connect"
              className={styles.btn}
              to="#"
            />
            <Button onClick={handleMenuOpen} className={styles["btn-base"]}>
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
