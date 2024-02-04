import style from "./Banner_2.module.css";
import image from "../../image/banner.jpeg";
export function Banner2() {
  return (
    <main className={style.body}>
      <div className={style.block_img}>
        <img src={image} alt="#" className={style.img} />
      </div>
      <div className={style.block_title}>
        <h1 className={style.title}>О нас</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          earum maxime. Eum est reprehenderit perspiciatis neque blanditiis quo
          iste delectus. Sunt quo tempore, officia iusto sed voluptates dolorum
          voluptas magni.
        </p>
      </div>
    </main>
  );
}
