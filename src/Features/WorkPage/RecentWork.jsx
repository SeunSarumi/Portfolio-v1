import HomeNav from "../../Components/HomeNav";
import ProfieCta from "../../Components/ProfieCta";
import ProjectNav from "../../Components/ProjectNav";
import styles from "./RecentWork.module.css";
import WorkDisplay from "./WorkDisplay";

function RecentWork() {
  return (
    <main className={styles.workSection}>
      <div className={styles.workSectionContainer}>
        {/* <HomeNav /> */}
        <ProjectNav />
        <h1 className={styles.workpageHeader}>Recent Work</h1>
        <WorkDisplay />
        <div className={styles.projectCtaBox}>
          <ProfieCta />
        </div>
      </div>
    </main>
  );
}

export default RecentWork;
