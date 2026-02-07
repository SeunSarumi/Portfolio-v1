import styles from "./LogoSection.module.css";

function LogoSection() {
  return (
    <div>
      {/* Put in different component later */}
      <div className={styles.workSection}>
        <div className={styles.devLogoContainer}>
          <h1>I’m currently</h1>
          <div className={styles.workContainer}>
            <h2>Available to work!</h2>
            <img src="/images/green-arrow.png" alt="" />
          </div>
          <div className={styles.logoContainer}>
            <div className={styles.logoPlaceholder}>
              <img
                className={styles.logoImg}
                src="./images/html-logo.png"
                alt=""
              />
            </div>
            <div className={styles.logoPlaceholder}>
              <img
                className={styles.logoImg}
                src="./images/css-logo.png"
                alt=""
              />
            </div>
            <div className={styles.logoPlaceholder}>
              <img
                className={styles.logoImg}
                src="./images/js-logo.png"
                alt=""
              />
            </div>
            <div className={styles.logoPlaceholder}>
              <img
                className={styles.logoImg}
                src="./images/react-logo.png"
                alt=""
              />
            </div>
            <div className={styles.logoPlaceholder}>
              <img
                className={styles.logoImg}
                src="./images/git-logo.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoSection;
