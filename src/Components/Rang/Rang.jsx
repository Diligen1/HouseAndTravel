import style from "./Rang.module.css";
import { Reviewer } from "./Reviewer/Reviewer";
import image from "../../image/ava.png";
export function Rating() {
  const ocenka = [
    {
      id: 1,
      name: "Отлично",
      count: "0",
    },
    {
      id: 2,
      name: "Очено хорошо",
      count: "0",
    },
    {
      id: 3,
      name: "Неплохо",
      count: "0",
    },
    {
      id: 4,
      name: "Плохо",
      count: "0",
    },
    {
      id: 5,
      name: "Ужасно",
      count: "0",
    },
  ];
  const reviews = [
    {
      avatar: image,
      name: "John Doe",
      title: "Amazing Product",
      star: "★★★☆☆",
      text: "Lorem ipsum dolor sit amet, ipsum dolor sit amet, dolor sit amet, dolor sit amet, ipsum dolor sit amet, dolor sit amet, consectetur  ipsum dolor sit amet, dolor sit amet, adipiscingconsectetur ipsum dolor sit amet, dolor sit amet, adipiscing elit...",
      rating: 5,
      likes: 10,
    },
    {
      avatar: image,
      name: "John Doe",
      title: "Amazing Product",
      star: "★★★☆☆",
      text: "Lorem ipsum dolor sit amet, ipsum dolor sit amet, dolor sit amet, dolor sit amet, ipsum dolor sit amet, dolor sit amet, consectetur  ipsum dolor sit amet, dolor sit amet, adipiscingconsectetur ipsum dolor sit amet, dolor sit amet, adipiscing elit...",
      rating: 5,
      likes: 10,
    },
    {
      avatar: image,
      name: "John Doe",
      title: "Amazing Product",
      star: "★★★☆☆",
      text: "Lorem ipsum dolor sit amet, ipsum dolor sit amet, dolor sit amet, dolor sit amet, ipsum dolor sit amet, dolor sit amet, consectetur  ipsum dolor sit amet, dolor sit amet, adipiscingconsectetur ipsum dolor sit amet, dolor sit amet, adipiscing elit...",
      rating: 5,
      likes: 10,
    },
    {
      avatar: image,
      name: "John Doe",
      title: "Amazing Product",
      star: "★★★☆☆",
      text: "Lorem ipsum dolor sit amet, ipsum dolor sit amet, dolor sit amet, dolor sit amet, ipsum dolor sit amet, dolor sit amet, consectetur  ipsum dolor sit amet, dolor sit amet, adipiscingconsectetur ipsum dolor sit amet, dolor sit amet, adipiscing elit...",
      rating: 5,
      likes: 10,
    },
    {
      avatar: image,
      name: "John Doe",
      title: "Amazing Product",
      star: "★★★☆☆",
      text: "Lorem ipsum dolor sit amet, ipsum dolor sit amet, dolor sit amet, dolor sit amet, ipsum dolor sit amet, dolor sit amet, consectetur  ipsum dolor sit amet, dolor sit amet, adipiscingconsectetur ipsum dolor sit amet, dolor sit amet, adipiscing elit...",
      rating: 5,
      likes: 10,
    },
  ];
  return (
    <main className={style.body}>
      <div className={style.left_block}>
        <div className={style.block_review}>
          <p className={style.text_review}>5.0</p>
          <div className={style.block_block}>
            <div className={style.block}></div>
            <div className={style.block}></div>
            <div className={style.block}></div>
            <div className={style.block}></div>
            <div className={style.block}></div>
          </div>
          <p className={style.count_review}>20 Отзывов</p>
        </div>
        {ocenka.map((value, index) => (
          <div key={index} className={style.block_ocenka}>
            <p className={style.ocenka_text}>{value.name}</p>
            <p className={style.ocenka_count}>{value.count}</p>
          </div>
        ))}
      </div>
      <div className={style.right_block}>
        <div className={style.block_input}>
          <input
            type="text"
            placeholder="Поиск Отзывов"
            className={style.input}
          />
        </div>
        <div className={style.rev_contain}>
          {reviews.map((review, index) => (
            <Reviewer key={index} {...review} />
          ))}
        </div>
      </div>
    </main>
  );
}
//★
