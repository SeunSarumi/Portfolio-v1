import styles from "./WorkDisplay.module.css";

function WorkDisplay() {
  return (
    <main className={styles.mainWorkContainer}>
      {/* work item start */}
      <div className={styles.workContainer}>
        <div className={styles.workImgContainer}>
          <img
            className={styles.workImg}
            src="./images/wild-oasis-img.png"
            alt="The Wild Oasis DashBoard"
          />
        </div>
        <div className={styles.workTextContainer}>
          <h1>The Wild Oasis</h1>
          <h3>
            Implemented the frontend and increased usability and engagement
          </h3>
          <a
            className={styles.visitBtn}
            href="https://seun-wild-oasis-dash.netlify.app/dashboard"
          >
            Vist Site
          </a>
        </div>
      </div>
      {/* work item end */}

      {/* work item start */}
      <div className={styles.workContainer}>
        <div className={styles.workImgContainer}>
          <img
            className={styles.workImg}
            src="./images/omnifood-img.png"
            alt="The Wild Oasis DashBoard"
          />
        </div>
        <div className={styles.workTextContainer}>
          <h1>Omnifood</h1>
          <h3>
            Implemented the frontend and increased usability and engagement
          </h3>
          <a
            className={styles.visitBtn}
            href="https://omnifood-seun.netlify.app/"
          >
            Vist Site
          </a>
        </div>
      </div>
      {/* work item end */}

      {/* work item start */}
      <div className={styles.workContainer}>
        <div className={styles.workImgContainer}>
          <img
            className={styles.workImg}
            src="./images/natours-img.png"
            alt="The Wild Oasis DashBoard"
          />
        </div>
        <div className={styles.workTextContainer}>
          <h1>Natours</h1>
          <h3>
            Implemented the frontend and increased usability and engagement
          </h3>
          <a
            className={styles.visitBtn}
            href="https://seun-wild-oasis-dash.netlify.app/dashboard"
          >
            Vist Site
          </a>
        </div>
      </div>
      {/* work item end */}
    </main>
  );
}

export default WorkDisplay;
