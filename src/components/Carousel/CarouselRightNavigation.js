import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./carousel.module.css";
import { ReactComponent as RightArrow } from "../../assets/right-arrow.svg";

const CarouselRightNavigation = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsEnd(swiper.isEnd);
    });
  }, [isEnd, swiper, swiper.isEnd]);

  return (
    <div className={styles.rightNavigation}>
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
};

export default CarouselRightNavigation;
