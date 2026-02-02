import styles from "./Hero.module.css";
import LogoSection from "./LogoSection";

function Hero() {
  return (
    <>
      <main className={styles.hero}>
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
            experiences. Previously at Blank.ng.
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
      </main>
      <section>
        <LogoSection />
      </section>
    </>
  );
}

export default Hero;
