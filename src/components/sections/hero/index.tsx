"use client";
import useMediaQuery from "@/hooks/useMediaQuery";
const Hero = () => {
  const isMobile = useMediaQuery(1024);
  return (
    <>
      {isMobile ? (
        <h1 className="md:pr-[200px]">
          Empowering AI-Crypto Innovations and Integrating AI Tools into crypto.
        </h1>
      ) : (
        <h1>
          The world&apos;s first platform for Tokenizing AI blockchain projects
        </h1>
      )}

      <div className="w-full md:w-[73%] lg:w-[656px] pt-5 lg:pt-12">
        {!isMobile ? (
          <h3 className="custom-border">
            Hold the Creon Pass NFT and earn passive income from AI Tools{" "}
          </h3>
        ) : (
          <h3 className="custom-border">
            {" "}
            Creon «Create On» confidential AI Tools for granting access through
            NFTs.{" "}
          </h3>
        )}
      </div>
    </>
  );
};

export default Hero;
