import { motion } from "framer-motion";
import HomeNav from "../../Components/HomeNav";
import styles from "./Hero.module.css";
import LogoSection from "./LogoSection";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
});

const fadeUp2 = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { type: "tween", duration: 0.8, ease: "easeOut" },
});

function Hero() {
  return (
    <>
      <main className={styles.hero}>
        <div className={styles.heroContainer}>
          <motion.div {...fadeUp2(1)}>
            <HomeNav />
          </motion.div>
          <motion.div className={styles.heroImgContainer} {...fadeUp(0)}>
            <img
              className={styles.heroImg}
              src="/images/profile-picture.png"
              alt=""
            />
          </motion.div>

          <motion.h1 className={styles.heroHeader} {...fadeUp(0.45)}>
            Hi, I’m Seun Sarumi — A Frontend Engineer crafting intuitive digital
            experiences. Previously at Blank.ng.
          </motion.h1>

          <motion.h2 className={styles.heroText} {...fadeUp(0.48)}>
            I specialize in building modern, scalable, and user-friendly
            interfaces with React. My focus is turning complex problems into
            elegant, responsive solutions that users love.
          </motion.h2>
          <motion.div className={styles.voiceImgContainer} {...fadeUp(0.2)}>
            <img src="/images/voiceImg.png" alt="" />
          </motion.div>
        </div>
      </main>
      <motion.section
        className={styles.logoSection}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: [0, 0.5, 1], y: [60, 20, 0] }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <LogoSection />
      </motion.section>
    </>
  );
}

export default Hero;
