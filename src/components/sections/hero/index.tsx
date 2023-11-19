import styles from "./styles.module.css";
const Hero = () => {
  return (
    <div className={styles.container}>
      <video autoPlay loop muted className={styles.wrapper}>
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className={styles.content}>
        <h2>
          The world&apos;s first platform for Tokenizing AI blockchain projects
        </h2>
        {/* Add other content as needed */}
      </div>
    </div>
  );
};

export default Hero;
