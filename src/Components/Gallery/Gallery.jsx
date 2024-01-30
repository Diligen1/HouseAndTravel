import style from "./Gallery.module.css";
import image from "../../image/galer/photo1705559289.jpeg";
import image_2 from "../../image/galer/photo1705559289 (1).jpeg";
import image_3 from "../../image/galer/photo1705559289 (2).jpeg";
import image_4 from "../../image/galer/photo1705559289 (3).jpeg";
import image_5 from "../../image/galer/photo1705559289 (4).jpeg";
import image_6 from "../../image/galer/photo1705559289 (5).jpeg";
import image_7 from "../../image/galer/photo1705559289 (6).jpeg";
import image_8 from "../../image/galer/photo1705559289 (7).jpeg";
import image_9 from "../../image/galer/photo1705559289 (8).jpeg";
import image_10 from "../../image/galer/photo1705559289 (9).jpeg";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
const images = [
  { id: 1, src: image },
  { id: 2, src: image_2 },
  { id: 3, src: image_3 },
  { id: 4, src: image_4 },
  { id: 5, src: image_5 },
  { id: 6, src: image_6 },
  { id: 7, src: image_7 },
  { id: 8, src: image_8 },
  { id: 9, src: image_9 },
  { id: 10, src: image_10 },
];
export function Gallery() {
  return (
    <main className={style.body}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={3}
      >
        {images.map((img) => (
          <SwiperSlide key={img.id} className={style.block_slide}>
            <div className={style.block_img}>
              <img
                src={img.src}
                alt={`Image ${img.id}`}
                className={style.img}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
