import HomeNav from "../../Components/HomeNav";
import ProfieCta from "../../Components/ProfieCta";
import styles from "./RecentWork.module.css";
import WorkDisplay from "./WorkDisplay";

function RecentWork() {
  return (
    <main className={styles.workSection}>
      <div className={styles.workSectionContainer}>
        <HomeNav />
        <h1 className={styles.workpageHeader}>Recent Work</h1>
        <WorkDisplay />
        <ProfieCta />
      </div>
    </main>
  );
}

export default RecentWork;
