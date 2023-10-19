import { Tooltip } from "@mui/material";
import React from "react";
import styles from "./card.module.css";

const Card = ({ data, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "album":
        return <AlbumCard data={data} />;
      case "songs":
        return <SongsCard data={data} />;
      default:
        return <></>;
    }
  };

  return getCard(type);
};

export default Card;

function AlbumCard({ data }) {
  const { follows, image, title, songs } = data;
  let count = songs.length;

  return (
    <Tooltip placement="top" arrow title={`${count} songs`}>
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <img src={image} alt={title} />
          <div className={styles.banner}>
            <small className={styles.chip}>{follows} follows</small>
          </div>
        </div>
        <div className={styles.titleWrapper}>
          <p>{title}</p>
        </div>
      </div>
    </Tooltip>
  );
}

function SongsCard({ data }) {
  const { likes, image, title } = data;

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <img src={image} alt={title} />
        <div className={styles.banner}>
          <small className={styles.chip}>{likes} likes</small>
        </div>
      </div>
      <div className={styles.titleWrapper}>
        <p>{title}</p>
      </div>
    </div>
  );
}
