import style from "./Block_info.module.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
export function Block_info() {
  return (
    <main className={style.body}>
      <Swiper
        className={style.swip}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
      >
        <SwiperSlide className={style.slide}>
          <div className={style.main}>
            <div className={style.block}>
              <h1 className={style.title}>Подарите эмоции</h1>
              <p className={style.text}>Какой то текст</p>
            </div>
            <div>
              <button className={style.btn}> Подробнее</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={style.slide}>
          <div className={style.main}>
            <div className={style.block}>
              <h1 className={style.title}>Все что нужно знать </h1>
              <p className={style.text}>Какой то текст</p>
            </div>
            <div>
              <button className={style.btn}> Подробнее</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
