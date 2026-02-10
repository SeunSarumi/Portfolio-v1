import { Link, NavLink } from "react-router";
import styles from "./HomeNav.module.css";

function HomeNav() {
  return (
    <nav className={styles.navSection}>
      <div className={styles.navContainer}>
        <div className={styles.firstNav}>
          <span className={styles.navName}>&lt;/seun sarumi&gt;</span>
          <div className={styles.btnLinks}>
            <a className={styles.btnLink} download href="/Seun_Sarumi_CV.pdf">
              CV
            </a>
            <NavLink className={styles.btnLink} to="/projects">
              Projects
            </NavLink>
          </div>
        </div>

        <div className={styles.middleNav}>
          <div className={styles.outerNav}>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/seun-sarumi-2066b8193/"
            >
              Linkedin
            </a>
            /
            <a target="_blank" href="https://github.com/SeunSarumi">
              Github
            </a>
            /
            <a target="_blank" href="mailto:seunsarumi@gmail.com">
              Email
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HomeNav;
