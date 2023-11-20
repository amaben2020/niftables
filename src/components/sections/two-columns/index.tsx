import VideoComponent from "@/components/elements/video";
import SectionContainer from "@/components/layout/SectionContainer";
const TwoColumns = () => {
  return (
    <SectionContainer>
      <div className="grid grid-cols-4">
        <div className="col-span-2">
          <h2>creon pass nft</h2>
        </div>

        <div className="col-span-2">
          <VideoComponent url="/rotating-device.mp4" />
        </div>
      </div>
    </SectionContainer>
  );
};

export default TwoColumns;
