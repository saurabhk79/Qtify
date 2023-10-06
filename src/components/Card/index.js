import React from "react";
import styles from "./card.module.css";

function Card({ followsCount, title, image }) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <img src={image} alt={title} />
        <div className={styles.cardFooter}>
          <button className={styles.cardButton}>{followsCount} follows</button>
        </div>
      </div>
      <p>{title}</p>
    </div>
  );
}

export default Card;
