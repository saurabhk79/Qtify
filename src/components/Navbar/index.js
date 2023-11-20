import React from "react";
import Brand from "../Brand";
import FeedbackButton from "../FeedbackButton";
import Searchbar from "../SearchBar";

import styles from "./navbar.module.css";

function Navbar({ allAlbumsData }) {
  return (
    <nav className={styles.navbar}>
      <Brand />
      <Searchbar allAlbumsData={allAlbumsData} />
      <FeedbackButton />
    </nav>
  );
}

export default Navbar;
