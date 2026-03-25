import { motion } from "framer-motion";
import { Link } from "react-router";
import styles from "./HomeCards.module.css";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      visualDuration: 0.5,
      bounce: 0.15,
    },
  },
};

function HomeCards() {
  return (
    <div className={styles.homeCards}>
      <motion.div
        className={styles.cardsContainer}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.figure
          className={styles.card1}
          variants={cardVariants}
          whileHover={{ y: -8, scale: 1.015 }}
          whileTap={{ scale: 0.99 }}
        >
          <div className={styles.card1_imgContainer}>
            <motion.img
              className={styles.card1_Img}
              src="/images/blank-tilted.png"
              alt="blank project titled"
              whileHover={{ scale: 1.04, rotate: -1.5 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />
          </div>

          <div className={styles.card1_TextBox}>
            <h1>Recent Work</h1>
            <h2>
              Interfaces so smooth, you’ll forget there’s code behind them.
            </h2>
            <Link className={styles.cardLink} to="./projects">
              See recent work
            </Link>
          </div>
        </motion.figure>

        <motion.figure
          className={styles.card2}
          variants={cardVariants}
          whileHover={{ y: -8, scale: 1.015 }}
          whileTap={{ scale: 0.99 }}
        >
          <div className={styles.card2_imgContainer}>
            <img
              className={styles.card2_Img}
              src="/images/features-card-img.png"
              alt="features card image"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />
          </div>

          <div className={styles.card2_TextBox}>
            <h1>Web apps, dashboards, landing pages & more</h1>
            <h2>
              All the code, speed, and scalability you need under one roof.
            </h2>
          </div>
        </motion.figure>
      </motion.div>
    </div>
  );
}

export default HomeCards;
