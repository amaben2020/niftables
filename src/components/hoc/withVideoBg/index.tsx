import styles from "./../../sections/hero/styles.module.css";

const withVideoBg =
  (Component: any, videoSrc = "/hero.mp4") =>
  // eslint-disable-next-line react/display-name
  ({ gradient }: { gradient: boolean }) => {
    return (
      <div className={styles.container}>
        <video autoPlay loop muted className={styles.wrapper}>
          <source src={videoSrc} type="video/mp4" />
        </video>
        {gradient ? (
          <div className={styles.content}>
            {<Component gradient={gradient} />}
          </div>
        ) : (
          <div>{<Component gradient={gradient} />}</div>
        )}
      </div>
    );
  };

export default withVideoBg;
