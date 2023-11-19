import styles from "./styles.module.css";
const VideoBackground = () => {
  return (
    <>
      <video autoPlay loop muted className={styles.wrapper}>
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className={styles.content}>
        <h1>Welcome to My Next.js App</h1>
        {/* Add other content as needed */}
      </div>
    </>
  );
};

export default VideoBackground;
