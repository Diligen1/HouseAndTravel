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
import { AiOutlineClose } from "react-icons/ai";

import { useState } from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
const images = [
  { id: 2, src: image_2 },
  { id: 3, src: image_3 },
  { id: 4, src: image_4 },
  { id: 5, src: image_5 },
  { id: 6, src: image_6 },
  { id: 7, src: image_7 },
  { id: 8, src: image_8 },
  { id: 9, src: image_9 },
];
export function Gallery() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <main className={style.body}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={3}
        className={style.mySwiper}
      >
        {images.map((img) => (
          <SwiperSlide key={img.id} className={style.block_slide}>
            <div className={style.block_img} onClick={openModal}>
              <img
                src={img.src}
                alt={`Image ${img.id}`}
                className={style.img}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {modalOpen && (
        <div className={style.modal}>
          <div className={style.modal_block}>
            <div className={style.modal_left_container}>
              {images.map((img) => (
                <div key={img.id} className={style.imager}>
                  <img
                    src={img.src}
                    alt={`Image ${img.id}`}
                    className={style.modal_img}
                  />
                </div>
              ))}
            </div>
            <p className={style.btn_close} onClick={closeModal}>
              <AiOutlineClose />
            </p>
            <p className={style.text_modal}>Галерея House and Travel</p>
          </div>
        </div>
      )}
    </main>
  );
}
