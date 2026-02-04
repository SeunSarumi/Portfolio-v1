import ProfieCta from "../../Components/ProfieCta";
import styles from "./Writing.module.css";

// Module is abit big for lazy reasons

function Writing() {
  return (
    <section className={styles.writingSection}>
      <div className={styles.writingContainer}>
        {/*  item start */}
        <div className={styles.writeup}>
          <h1>Process</h1>
          <h2>fast,friendly,predictable</h2>
        </div>
        {/* end of item */}
        {/*  item start */}
        <div className={styles.writeup}>
          <h1>01 — Discovery, but chill</h1>
          <h2>
            30 minutes to understand your product, users, and deadlines. No
            40-slide decks.
          </h2>
        </div>
        {/* end of item */}
        {/*  item start */}
        <div className={styles.writeup}>
          <h1>02 — Plan the sprint</h1>
          <h2>
            Define scope, milestones, and what “done” looks like. You always
            know what’s coming next.
          </h2>
        </div>
        {/* end of item */}
        {/*  item start */}
        <div className={styles.writeup}>
          <h1>03 — Build in public (with you)</h1>
          <h2>
            Daily updates, preview links, and loom walk-throughs. Feedback while
            it’s still cheap.
          </h2>
        </div>
        {/* end of item */}
        {/*  item start */}
        <div className={styles.writeup}>
          <h1>04 — Polish & ship</h1>
          <h2>
            Accessibility checks, performance passes, edge cases, docs. Then we
            hit deploy. High-five.
          </h2>
        </div>
        {/* end of item */}
        {/* ************************* Tools i speak ********************** */}
        <div className={styles.writeupTools}>
          <h1>Tools I speak </h1>
          <h2>so you don’t have to</h2>
          <h3>
            React • Next.js • Zustand/Redux • Tailwind • Styled Components• REST
            APIs • Vite • Vercel/Netlify • Git • GitHub Actions • a11y (WCAG) •
            Perf (Core Web Vitals)
          </h3>
        </div>
        {/* ********************** Philosophies******************** */}
        <div className={styles.philContainer}>
          <h1 className={styles.philHeading}>Little philosophies</h1>

          <ul className={styles.writeupList}>
            <li className={styles.listContainer}>
              <h1>People first</h1>
              <h2>Accessibilty isn't a checkbox: it's table stakes</h2>
            </li>
            {/* end */}
            <li className={styles.listContainer}>
              <h1>Design-faithful, dev-sensible.</h1>
              <h2>I respect pixels and deadlines.</h2>
            </li>
            {/* end */}
            <li className={styles.listContainer}>
              <h1>Measure everything</h1>
              <h2>
                If it isn't faster,clearer,or more useful, we keep gooing{" "}
              </h2>
            </li>
            {/* end */}
            <li className={styles.listContainer}>
              <h1>No surprises</h1>
              <h2>Clear scope, crisp,comms,frequent demos</h2>
            </li>
            {/* end */}
          </ul>
        </div>
      </div>
      <ProfieCta />
    </section>
  );
}

export default Writing;
