"use client";
import useMediaQuery from "@/hooks/useMediaQuery";
import styles from "./styles.module.css";
const Hero = () => {
  const isMobile = useMediaQuery(1024);
  return (
    <div className={styles.container}>
      <video autoPlay loop muted className={styles.wrapper}>
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className={styles.content}>
        {isMobile ? (
          <h1 className="pr-[200px] md:pr-0">
            Empowering AI-Crypto Innovations and Integrating AI Tools into
            crypto.
          </h1>
        ) : (
          <h1>
            The world&apos;s first platform for Tokenizing AI blockchain
            projects
          </h1>
        )}

        <div className="w-[66%] lg:w-[656px] pt-5 lg:pt-12">
          {!isMobile ? (
            <h3>
              Hold the Creon Pass NFT and earn passive income from AI Tools{" "}
            </h3>
          ) : (
            <h3>
              {" "}
              Creon «Create On» confidential AI Tools for granting access
              through NFTs.{" "}
            </h3>
          )}
        </div>

        {/* Add other content as needed */}
      </div>
    </div>
  );
};

export default Hero;
