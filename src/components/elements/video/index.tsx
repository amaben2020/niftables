type TUrl = {
  url: string;
};
const VideoComponent = ({ url }: TUrl) => {
  return (
    <video autoPlay loop muted preload="auto">
      <source src={url} type="video/mp4" />
    </video>
  );
};

export default VideoComponent;
