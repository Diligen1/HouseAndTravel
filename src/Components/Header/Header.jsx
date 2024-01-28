import style from "./Header.module.css";
import { Link } from "react-router-dom";
export function Header() {
  const value = [
    {
      id: 1,
      icon: <i className="fi fi-rr-home"></i>,
      name: "Главная",
      link: "/",
    },
    {
      id: 2,
      icon: <i className="fi fi-rr-pencil"></i>,
      name: "Отзыв",
      link: "/review",
    },
    {
      id: 3,
      icon: <i className="fi fi-rr-picture"></i>,
      name: "Галерея",
      link: "/gallery",
    },
  ];
  return (
    <main className={style.body}>
      <div className={style.block_logo}>
        <p className={style.title}> Hourse and Travel </p>
      </div>
      <div className={style.nav_block}>
        {value.map((x, index) => (
          <Link key={index} to={x.link} className={style.block_title}>
            {x.icon}
            <p className={style.text}>{x.name}</p>
          </Link>
        ))}
      </div>
      <div className={style.register_block}>
        <div className={style.language_block}>
          <i className="fi fi-rr-globe" style={{ padding: "0px 10px" }}></i>
          <p className={style.lenguage}>RU</p>
        </div>
        <button className={style.btn}>Вход</button>
      </div>
    </main>
  );
}
