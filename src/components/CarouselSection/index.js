import React, { useState } from "react";
import Card from "../Card";
import Carousel from "../Carousel";
import styles from "./carouselSection.module.css";

const CarouselSection = ({ data, title, type }) => {
  const [carouselToggle, setCarouselToggle] = useState(false);

  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };

  return (
    <div className={styles.carouselSection}>
      <div className={styles.sectionHeader}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {carouselToggle ? "Collapse All" : "Show All"}
        </h4>
      </div>

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

export default CarouselSection;
