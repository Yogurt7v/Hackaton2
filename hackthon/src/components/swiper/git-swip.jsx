import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import style from "./git-swip.module.css";

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const GitSwip  =({githubRepos}) => {

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={style.mySwiper}
      >
        {githubRepos.map((item) => (
  <SwiperSlide key={item}><div className={style.swiperText}>{item}</div></SwiperSlide>))}
      </Swiper>
    </>
  );
}

GitSwip.propTypes = {
  githubRepos: PropTypes.array
}