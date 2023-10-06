import React from "react";
import Brand from "../Brand";
import FeedbackButton from "../FeedbackButton";

import styles from "./navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Brand />
      <FeedbackButton />
    </nav>
  );
}

export default Navbar;
