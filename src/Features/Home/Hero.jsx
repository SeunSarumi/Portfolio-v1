import styles from "./Hero.module.css";

function Hero() {
  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.heroImgContainer}>
          <img
            className={styles.heroImg}
            src="/images/profile-picture.png"
            alt=""
          />
        </div>

        <h1 className={styles.heroHeader}>
          Hi, I’m Seun Sarumi — A Frontend Engineer crafting intuitive digital
          experiences. Previously at Blank.ng .
        </h1>

        <h2 className={styles.heroText}>
          I specialize in building modern, scalable, and user-friendly
          interfaces with React and Next.js. My focus is turning complex
          problems into elegant, responsive solutions that users love.
        </h2>
        <div className={styles.voiceImgContainer}>
          <img src="/images/voiceImg.png" alt="" />
        </div>
      </div>
      {/* Put in different component later */}
      <div className={styles.devLogoContainer}>
        <h1>I’m currently</h1>
        <div className={styles.workContainer}>
          <h2>Available to work!</h2>
          <img src="/images/green-arrow.png" alt="" />
        </div>
        <div className={styles.logoContainer}>
          <div className={styles.logoPlaceholder}>Logo</div>
          <div className={styles.logoPlaceholder}>Logo</div>
          <div className={styles.logoPlaceholder}>Logo</div>
          <div className={styles.logoPlaceholder}>Logo</div>
          <div className={styles.logoPlaceholder}>Logo</div>
        </div>
      </div>
    </>
  );
}

export default Hero;
