import style from "./Maps.module.css";
import image from "../../image/243057.jpg";
export function Maps() {
  return (
    <main className={style.body}>
      <div className={style.map}>
        <img src={image} alt="#" className={style.img} />
      </div>
    </main>
  );
}
