import { Link } from "react-router";
import styles from "./HomeCards.module.css";

function HomeCards() {
  return (
    <div className={styles.homeCards}>
      <div className={styles.cardsContainer}>
        <figure className={styles.card1}>
          <div className={styles.card1_imgContainer}>
            <img
              className={styles.card1_Img}
              src="/images/blank-tilted.png"
              alt="blank project titled"
            />
          </div>
          <div className={styles.card1_TextBox}>
            <h1>Recent Work</h1>
            <h2>
              Interfaces so smooth, you’ll forget there’s code behind them.
            </h2>
            <Link className={styles.cardLink} to="./projects">
              See recent work
            </Link>
          </div>
        </figure>
        <figure className={styles.card2}></figure>
      </div>
    </div>
  );
}

export default HomeCards;
