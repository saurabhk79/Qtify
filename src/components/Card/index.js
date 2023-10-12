import React from "react";
import styles from "./card.module.css";

const Card = ({ data, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "album":
        const { follows, image, title } = data;
        return <AlbumCard followsCount={follows} image={image} title={title} />;
      default:
        return <></>;
    }
  };

  return getCard(type);
};

export default Card;

function AlbumCard({ followsCount, title, image }) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <img src={image} alt={title} />
        <div className={styles.banner}>
          <small className={styles.chip}>{followsCount} follows</small>
        </div>
      </div>
      <div className={styles.titleWrapper}>
        <p>{title}</p>
      </div>
    </div>
  );
}
