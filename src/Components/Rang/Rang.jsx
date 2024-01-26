import style from "./Rang.module.css";
import image from "../../image/banner.jpeg";
export function Rating() {
  const stars = ["★", "★", "★", "★", "★"];
  return (
    <main className={style.body}>
      <div className={style.left_block}>
        <div className={style.img_block}>
          <img src={image} alt="#" className={style.img} />
        </div>

        <div className={style.block_text}>
          <h1 className={style.title}>Сон Коль</h1>
          <p className={style.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            obcaecati nemo corrupti laborum reiciendis sapiente quis, cumque,
            fugit neque enim explicabo aliquam corporis aut? Asperiores facere
            tempora nostrum praesentium veritatis.
          </p>
        </div>
        <div className={style.rang}>
          <p className={style.count}>Кол Отзывов</p>
          {stars.map((star, index) => (
            <p key={index} className={style.star}>
              {star}
            </p>
          ))}
          <p className={style.ocenka}>0</p>
        </div>
      </div>
      <div className={style.right_block}></div>
    </main>
  );
}
//★
