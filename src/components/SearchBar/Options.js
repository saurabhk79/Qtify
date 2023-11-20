import React from "react";
import styles from "./search.module.css";

const Options = ({ songs, url, follows, album, artistsNames, likes }) => {
  let ArtistOfAlbums = [];
  songs &&
    songs.forEach(({ artists }, index) => {
      if (index < 2) {
        ArtistOfAlbums.push(artists);
      }
    });
  let artists = artistsNames
    ? artistsNames.join(" ")
    : ArtistOfAlbums.flat().join(" ");

  return (
    <div className={styles.wrapper}>
      <div className={styles.album}>
        <img src={url} alt="" />
        <div className={styles.content}>
          <p>{album}</p>

          <p className={styles.artist}>
            {artists.slice(0, artists.length - 30)}
          </p>
        </div>
      </div>
      {likes ? (
        <span className={styles.title}>{likes} Likes</span>
      ) : (
        <span className={styles.title}>{follows} Follows</span>
      )}
    </div>
  );
};

export default Options;
