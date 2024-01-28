import style from "./News.module.css";
import image from "../../image/galer/photo1705559289 (1).jpeg";
import image_2 from "../../image/galer/photo1705559289 (2).jpeg";
import image_3 from "../../image/galer/photo1705559289 (3).jpeg";
export function News() {
  const news = [
    {
      id: 1,
      img: image,
      title: "Roma",
      text: "Lorem ipsum proper default progerin",
    },
    {
      id: 2,
      img: image_2,
      title: "Kuba",
      text: "Lorem ipsum proper default progerin",
    },
    {
      id: 3,
      img: image_3,
      title: "Sayan",
      text: "Lorem ipsum proper default progerin",
    },
  ];
  return (
    <main className={style.body}>
      {news.map((value, index) => (
        <div key={index} className={style.block_info}>
          <div className={style.block_img}>
            <img src={value.img} alt={value.title} className={style.img} />
          </div>
          <h1 className={style.title}>{value.title}</h1>
          <p className={style.text}>{value.text}</p>
        </div>
      ))}
    </main>
  );
}
