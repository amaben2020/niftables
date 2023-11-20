import profitingImage from "@/assets/images/profiting.png";
import CustomImageWithOpacity from "@/components/elements/custom-image/image";
import VideoComponent from "@/components/elements/video";
import useMediaQuery from "@/hooks/useMediaQuery";
import clsx from "clsx";
const ColumnVariant2 = () => {
  const isTablet = useMediaQuery(1024);

  return (
    <div>
      <h2 className={clsx("lg:pb-36")}>Profiting Through</h2>

      <h3 className="sub-title block text-right lg:hidden">
        AI Innovation & Decentralization
      </h3>

      <div className="grid grid-cols-1 gap-5 2xl:gap-6 md:grid-cols-4 md:pb-20 lg:pb-28 items-center">
        <div className="col-span-3">
          {isTablet ? (
            <VideoComponent url="/profiting_tablet.mp4" />
          ) : (
            <CustomImageWithOpacity image={profitingImage} />
          )}
          <div className="col-span-1 px-4"></div>
        </div>

        <div className="md:flex md:col-span-1 min-h-full items-center border-custom-main  border-y md:border-y-0 border-x-0 md:border-x py-6  md:px-7">
          <div>
            <h3 className="font-secondary font-bold text-white">
              {" "}
              The dynamic community driven business model of the future.
            </h3>
            <p className="leading-[130%]">
              At Creon, we blend the power of AI tools with the dynamic crypto
              and NFT markets, utilizing an innovative business model to drive
              profitability. This approach empowers our community, as our NFT
              and token holders directly benefit from the growth and prosperity
              of the Creon network, creating a win-win scenario for both our
              community and for the projects we launch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColumnVariant2;
