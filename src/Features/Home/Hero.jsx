import HomeNav from "../../Components/HomeNav";
import styles from "./Hero.module.css";
import LogoSection from "./LogoSection";

function Hero() {
  return (
    <>
      <main className={styles.hero}>
        <div className={styles.heroContainer}>
          <HomeNav />
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
            interfaces with React. My focus is turning complex problems into
            elegant, responsive solutions that users love.
          </h2>
          <div className={styles.voiceImgContainer}>
            <img src="/images/voiceImg.png" alt="" />
          </div>
        </div>
      </main>
      <section className={styles.logoSection}>
        <LogoSection />
      </section>
    </>
  );
}

export default Hero;
