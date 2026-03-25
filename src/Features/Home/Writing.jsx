import { motion, useReducedMotion } from "framer-motion";
import ProfieCta from "../../Components/ProfieCta";
import styles from "./Writing.module.css";

function Writing() {
  const shouldReduceMotion = useReducedMotion();

  const sectionVariants = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.55,
        ease: "easeOut",
      },
    },
  };

  const listVariants = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.section
      className={styles.writingSection}
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className={styles.writingContainer}>
        <motion.div
          className={styles.writeup}
          variants={itemVariants}
          whileInView={{ opacity: [0, 0.5, 1], y: [60, 20, 0] }}
        >
          <h1>Process</h1>
          <h2>fast,friendly,predictable</h2>
        </motion.div>

        <motion.div
          className={styles.writeup}
          variants={itemVariants}
          whileInView={{ opacity: [0, 0.5, 1], y: [60, 20, 0] }}
        >
          <h1>01 — Discovery, but chill</h1>
          <h2>
            30 minutes to understand your product, users, and deadlines. No
            40-slide decks.
          </h2>
        </motion.div>

        <motion.div
          className={styles.writeup}
          variants={itemVariants}
          whileInView={{ opacity: [0, 0.5, 1], y: [60, 20, 0] }}
        >
          <h1>02 — Plan the sprint</h1>
          <h2>
            Define scope, milestones, and what “done” looks like. You always
            know what’s coming next.
          </h2>
        </motion.div>

        <motion.div
          className={styles.writeup}
          variants={itemVariants}
          whileInView={{ opacity: [0, 0.5, 1], y: [60, 20, 0] }}
        >
          <h1>03 — Build in public (with you)</h1>
          <h2>
            Daily updates, preview links, and loom walk-throughs. Feedback while
            it’s still cheap.
          </h2>
        </motion.div>

        <motion.div
          className={styles.writeup}
          variants={itemVariants}
          whileInView={{ opacity: [0, 0.5, 1], y: [60, 20, 0] }}
        >
          <h1>04 — Polish & ship</h1>
          <h2>
            Accessibility checks, performance passes, edge cases, docs. Then we
            hit deploy. High-five.
          </h2>
        </motion.div>

        <motion.div
          className={styles.writeupTools}
          variants={itemVariants}
          whileInView={{ opacity: [0, 0.5, 1], y: [60, 20, 0] }}
        >
          <h1>Tools I speak</h1>
          <h2>so you don’t have to</h2>
          <h3>
            React • Next.js • Zustand/Redux • Tailwind • Styled Components •
            REST APIs • Vite • Vercel/Netlify • Git • GitHub Actions • a11y
            (WCAG) • Perf (Core Web Vitals)
          </h3>
        </motion.div>

        <motion.div
          className={styles.philContainer}
          variants={itemVariants}
          whileInView={{ opacity: [0, 0.5, 1], y: [60, 20, 0] }}
        >
          <h1 className={styles.philHeading}>Little philosophies</h1>

          <motion.ul className={styles.writeupList} variants={listVariants}>
            <motion.li className={styles.listContainer} variants={itemVariants}>
              <h1>People first</h1>
              <h2>Accessibility isn't a checkbox: it's table stakes</h2>
            </motion.li>

            <motion.li className={styles.listContainer} variants={itemVariants}>
              <h1>Design-faithful, dev-sensible.</h1>
              <h2>I respect pixels and deadlines.</h2>
            </motion.li>

            <motion.li className={styles.listContainer} variants={itemVariants}>
              <h1>Measure everything</h1>
              <h2>
                If it isn't faster, clearer, or more useful, we keep going
              </h2>
            </motion.li>

            <motion.li className={styles.listContainer} variants={itemVariants}>
              <h1>No surprises</h1>
              <h2>Clear scope, crisp comms, frequent demos</h2>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>

      <ProfieCta />
    </motion.section>
  );
}

export default Writing;
