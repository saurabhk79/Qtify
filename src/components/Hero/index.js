import React from "react";
import styles from "./hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <img src="vibrating-headphone.svg" alt="headphone" />
    </div>
  );
}

export default Hero;
