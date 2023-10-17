import React, { useEffect } from "react";
import Swiper from "swiper";
import {
  SwiperSlide,
  useSwiper,
  Swiper as SwiperComponent,
} from "swiper/react";
import { Navigation } from "swiper/modules";

import styles from "./carousel.module.css";
import CarouselLeftNavigation from "./CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation";

import "swiper/css";
import "swiper/css/navigation";

const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0, null);
  }, [data]);

  return <></>;
};

const Carousel = ({ data, renderComponent }) => {
  return (
    <div className={styles.wrapper}>
      <SwiperComponent
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
        {data.map((item) => (
          <SwiperSlide key={item.id}>{renderComponent(item)}</SwiperSlide>
        ))}
      </SwiperComponent>
    </div>
  );
};

export default Carousel;
