import styles from "./Footer.module.css";
import { motion } from "framer-motion";

const footerVariants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.14,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function Footer() {
  return (
    <motion.footer
      className={styles.footerSection}
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={styles.footerBox}>
        <div className={styles.footerContainer}>
          <motion.div className={styles.footerTextbox} variants={itemVariants}>
            <span className={styles.nameHeader}>&lt;/seun sarumi&gt;</span>
            <h1>
              code, coffee <br /> and a bit of chaos
            </h1>
            <h2>
              That’s pretty much <br /> how I ship your frontend.
            </h2>
            <h3>Headquartered in London - working worldwide</h3>
            <p className={styles.copyright}>
              &copy; 2026 Seun Sarumi. Crafted with care in VS Code
            </p>
          </motion.div>

          <motion.div className={styles.footerImgbox} variants={itemVariants}>
            <img
              className={styles.footerimg}
              src="./images/footer-img.png"
              alt="footer image"
            />
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
