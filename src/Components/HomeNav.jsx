import { Link, NavLink } from "react-router";
import styles from "./HomeNav.module.css";

function HomeNav() {
  return (
    <nav className={styles.navSection}>
      <div className={styles.navContainer}>
        <div className={styles.firstNav}>
          <span className={styles.navName}>&lt;/seun sarumi&gt;</span>
          <div className={styles.btnLinks}>
            <NavLink className={styles.btnLink} to="/projects">
              CV
            </NavLink>
            <NavLink className={styles.btnLink} to="/projects">
              Projects
            </NavLink>
          </div>
        </div>

        <div className={styles.middleNav}>
          <div className={styles.outerNav}>
            <a href="https://www.linkedin.com/in/seun-sarumi-2066b8193/">
              Linkedin
            </a>
            /<a href="https://github.com/SeunSarumi">Github</a>/
            <a href="mailto:seunsarumi@gmail.com">Email</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HomeNav;
