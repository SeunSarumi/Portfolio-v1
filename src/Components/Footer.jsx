import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerBox}>
        <div className={styles.footerContainer}>
          <div className={styles.footerTextbox}>
            <span className={styles.nameHeader}>&lt;/seun sarumi&gt;</span>
            <h1>
              code, coffee <br /> and a bit of chaos
            </h1>
            <h2>
              That’s pretty much <br /> how I ship your frontend.
            </h2>
            <h3>Headquartered in London - working worldwide</h3>
            <p className={styles.copyright}>
              {" "}
              &copy; 2025 Seun Sarumi. Crafted with care in VS Code
            </p>
          </div>
          <div className={styles.footerImgbox}>
            <img
              className={styles.footerimg}
              src="./images/footer-img.png"
              alt="footer image"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
