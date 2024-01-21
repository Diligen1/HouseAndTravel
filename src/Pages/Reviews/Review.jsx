import style from "./Review.module.css";
import image from "../../image/imager/Natsu.jpeg";
import image_2 from "../../image/imager/Без названия (1).jpeg";
import image_3 from "../../image/imager/Без названия (2).jpeg";
import image_4 from "../../image/imager/Без названия (3).jpeg";
import { useState, useEffect } from "react";
export function Review() {
  const [count, setCount] = useState(0);

  const handleMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "ArrowLeft") {
        handleMinus();
      } else if (event.key === "ArrowRight") {
        handlePlus();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [count]);
  const handlePlus = () => {
    setCount(count + 1);
  };
  const images = [image, image_2, image_3, image_4];
  const forma = [
    { id: 1, name: "kuba", title: "man" },
    { id: 2, name: "roma", title: "name" },
    { id: 3, name: "roma", title: "form" },
  ];
  return (
    <main className={style.body}>
      <p>Hello Review</p>
      {forma.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <input type="checkbox" />
          <input type="text" placeholder="name" />
        </div>
      ))}
      <button onClick={handlePlus}>plus</button>
      <p>{count}</p>
      <button onClick={handleMinus}>minus</button>

      <div className={style.block}>
        {images.map((src, index) => (
          <div key={index} className={style.image_block}>
            <img
              src={src}
              alt="#"
              className={`${style.img} ${index === count ? style.active : ""}`}
            />
          </div>
        ))}
      </div>
      <div className={style.block_2}>
        {images.map((src, index) => (
          <div key={index} className={style.block_image}>
            <img src={src} alt="#" className={style.image} />
          </div>
        ))}
      </div>
    </main>
  );
}
