import React, { useState } from "react";
import BasicTabs from "../BasicTabs";
import Card from "../Card";
import Carousel from "../Carousel";
import styles from "./section.module.css";

const Section = ({ data, title, type, value = 0, handleChange = null }) => {
  const [carouselToggle, setCarouselToggle] = useState(false);

  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };

  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <h3>{title}</h3>
        {type === "songs" ? null : (
          <h4 className={styles.toggleText} onClick={handleToggle}>
            {carouselToggle ? "Collapse All" : "Show All"}
          </h4>
        )}
      </div>

      {type === "songs" ? (
        <BasicTabs value={value} handleChange={handleChange} />
      ) : null}

      {carouselToggle ? (
        <div className={styles.cardsBox}>
          {data.map((item) => {
            return <Card data={item} type={"album"} key={item.id} />;
          })}
        </div>
      ) : (
        <Carousel
          data={data}
          renderComponent={(data) => <Card data={data} type={type} />}
        />
      )}
    </div>
  );
};

export default Section;
