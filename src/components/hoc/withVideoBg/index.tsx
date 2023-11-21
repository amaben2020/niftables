import useMediaQuery from "@/hooks/useMediaQuery";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const withVideoBg =
  (Component: any, videoSrc = "/hero.mp4") =>
  // eslint-disable-next-line react/display-name
  ({
    gradient,
    variant,
  }: {
    gradient?: boolean;
    variant?: "hero" | "cards" | "horizontal";
  }) => {
    const isTablet = useMediaQuery(1024);

    const renderVideoSource =
      variant === "cards" && isTablet
        ? videoSrc
        : variant === "hero"
        ? videoSrc
        : variant === "horizontal"
        ? videoSrc
        : "";

    const [renderVideo, setRenderVideo] = useState(renderVideoSource ?? "");

    useEffect(() => {
      setRenderVideo(renderVideoSource);
    }, [renderVideoSource]);
    return (
      <div className={styles.container} data-variant={String(variant)}>
        {renderVideo.length ? (
          <video autoPlay loop muted className={styles.wrapper}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <p></p>
        )}
        {gradient ? (
          <div className={styles.content}>
            <Component gradient={gradient} />
          </div>
        ) : (
          <div>
            <Component />
          </div>
        )}
      </div>
    );
  };

export default withVideoBg;
