import React from "react";
import Brand from "../Brand";
import FeedbackButton from "../FeedbackButton";
import Searchbar from "../SearchBar";

import styles from "./navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Brand />
      <Searchbar />
      <FeedbackButton />
    </nav>
  );
}

export default Navbar;
