import { Link } from "react-router";
import styles from "./ProfileCta.module.css";

function ProfieCta() {
  return (
    <div className={styles.profileSection}>
      <div className={styles.ctaContainer}>
        {/* container size  */}
        <div className={styles.container}>
          {/* first flex */}
          <div className={styles.containertextBox}>
            <h1 className={styles.boxHeader}>
              Let’s make your front end the part users rave about.
            </h1>
            <div className={styles.btnContainer}>
              <Link className={styles.discoverybtn}>
                <img src="/images/discoverybtn.png" alt="discover button" />
              </Link>
              <Link to="/projects" className={styles.recentProjects}>
                <img src="/images/recentbtn.png" alt="recent button" />
              </Link>
            </div>
            <div className={styles.emailBox}>
              <div className={styles.imgBox}>
                <img
                  className={styles.boxImg}
                  src="/images/flying-paper.png"
                  alt=""
                />
              </div>
              <div className={styles.emailTextBox}>
                <h1 className={styles.emailHeader}>Prefer to email?</h1>
                <a
                  className={styles.emailSecondary}
                  href="mailto:seunsarumi@gmail.com"
                >
                  seunsarumi@gmail.com
                </a>
              </div>
            </div>
          </div>
          {/* 2nd flex */}
          <div className={styles.containerpictureBox}>
            <img src="/images/cta-picture.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfieCta;
