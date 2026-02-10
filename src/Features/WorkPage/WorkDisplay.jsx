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
          <h2>Dashboard for a make belief cabin rental company</h2>
          <h3>
            Built with : React,React Query, Context Api Supabase and styled with
            Styled Components <br />
            Login Details: test@test.com testtest123
          </h3>
          {/* <p>Login Details: test@test.com testtest123 </p> */}
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
          <h2>Landing Page for make believe food app Omnifood</h2>
          <h3>Built with : HTML, CSS and Javascript</h3>
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
            src="./images/blank-img.png"
            alt="Blank Landing Page "
          />
        </div>
        <div className={styles.workTextContainer}>
          <h1>Blank.ng</h1>
          <h2>
            One of my first collaborative projects, I built the landing page for
            my previous company along side a senior developer
          </h2>
          <h3>Built with : React and CSS</h3>
          <a className={styles.visitBtn} href="https://blank.ng/">
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
            alt="Natours image"
          />
        </div>
        <div className={styles.workTextContainer}>
          <h1>Natours</h1>
          <h2>Landing Page for a make believe tourism company</h2>
          <h3>Built with : HTML, SCSS and Javascript</h3>
          <a
            className={styles.visitBtn}
            href="https://natours-seunsarumi.netlify.app/"
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
