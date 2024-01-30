import style from "./Header.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
export function Header() {
  const [openMenu, setOpenMenu] = useState(false);

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
      <div className={style.block_title}>
        <p className={style.title}>House and Travel</p>
      </div>
      <div
        className={
          openMenu ? [style.block, style.active].join(" ") : [style.block]
        }
      >
        <div className={style.navBar}>
          {value.map((val, index) => (
            <Link key={index} to={val.link} className={style.block_nav}>
              {val.icon}
              <p className={style.name}>{val.name}</p>
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
      </div>
      <div onClick={() => setOpenMenu(!openMenu)} className={style.mobile_btn}>
        {openMenu ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
    </main>
  );
}
