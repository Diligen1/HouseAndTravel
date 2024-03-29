import style from "./Review.module.css";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import { StarRating } from "../../Components/StarRating/StarRating";
import { useState } from "react";

export function Review() {
  const [userRating, setUserRating] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRatingChange = (newRating) => {
    setUserRating(newRating);
  };

  return (
    <main className={style.body}>
      <Header className={style.header} />
      <div className={style.container}>
        <div className={style.left_block}>
          <p className={style.title}>Какие у вас впечетление ? </p>
        </div>
        <div className={style.right_block}>
          <div className={style.star_block}>
            <h2 className={style.text}>Как бы вы оценили свое прибывание ?</h2>
            <span className={style.texter}>
              <StarRating onRate={handleRatingChange} /> {userRating}
            </span>
          </div>
          <div className={style.title_block}>
            <h2 className={style.text}>Добавьте Название к своему отзыву</h2>
            <input
              type="text"
              placeholder="Название"
              className={style.title_input}
            />
          </div>
          <div className={style.text_block}>
            <h2 className={style.text}>Напишите отзыв</h2>
            <textarea
              rows={4}
              cols={30}
              placeholder="Введите текст ..."
              className={style.textarea}
            />
          </div>
          <div className={style.image_block}>
            <h2 className={style.text}>Добавьте Изображение</h2>
            <div className={style.btn_btn}>
              <input
                type="file"
                className={style.btn_img}
                onChange={handleImageChange}
                id="fileInput"
              />
              <label
                htmlFor="fileInput"
                className={style.image_btn}
                onChange={handleImageChange}
              >
                Выбрать файл
              </label>
            </div>

            {selectedImage && (
              <div className={style.block_img}>
                <h3 className={style.text}>Выбранное изображение:</h3>
                <img
                  src={selectedImage}
                  alt="Выбранное изображение"
                  className={style.img_img}
                />
              </div>
            )}
          </div>
          <div className={style.block_pass}>
            <button className={style.btn_pass}>Отправить</button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
