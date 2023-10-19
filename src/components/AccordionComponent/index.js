import React from "react";
import BasicAccordion from "./BasicAccordion";
import styles from "./accordionComponent.module.css";

const AccordionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>FAQs</h1>
      <BasicAccordion />
    </div>
  );
};

export default AccordionComponent;
