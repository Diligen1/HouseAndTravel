import style from "./Our.module.css";
import image from "../../image/galer/photo1705559289 (7).jpeg";
import image_2 from "../../image/galer/photo1705559289 (4).jpeg";
import image_3 from "../../image/galer/photo1705559289 (9).jpeg";
export function Our() {
  return (
    <main className={style.body}>
      <div className={style.title_contain}>
        <h1 className={style.title}>Наша миссия</h1>
        <p className={style.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum numquam
          tempora, eligendi doloribus repudiandae vitae ad nisi sed quo minima
          quam, molestias illo in, optio eveniet itaque. Dolore, cumque neque.
        </p>
      </div>
      <div className={style.img_contain}>
        <div className={style.double_contain}>
          <div className={style.img_block}>
            <img src={image} alt="#" className={style.img} />
          </div>
          <div className={style.img_block}>
            <img src={image_2} alt="#" className={style.img} />
          </div>
        </div>
        <div className={style.img_block_2}>
          <img src={image_3} alt="#" className={style.image} />
        </div>
      </div>
    </main>
  );
}
