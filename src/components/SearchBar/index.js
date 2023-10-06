import React from "react";
import styles from "./search.module.css";

function Searchbar() {
  return (
    <div className={styles.navSearchBox}>
      <input
        type="text"
        placeholder="Search an album of your choice"
        className={styles.textbox}
      />
      <hr />
      <img src="Search icon.svg" alt="search" className={styles.searchIcon} />
    </div>
  );
}

export default Searchbar;
