import style from "./Header.module.css";
export function Header() {
  return (
    <main className={style.body}>
      <div className={style.block_logo}>
        <p className={style.title}> House and Travel </p>
      </div>
      <div className={style.nav_block}>
        <div className={style.block_title}>
          <i className="fi fi-rr-home"></i>
          <p className={style.text}>Главная</p>
        </div>
        <div className={style.block_title}>
          <i className="fi fi-rr-pencil"></i>
          <p className={style.text}>Отзыв</p>
        </div>
        <div className={style.block_title}>
          <i className="fi fi-rr-picture"></i>
          <p className={style.text}>Галерея</p>
        </div>
        <div className={style.block_title}>
          <i className="fi fi-rr-apps"></i>
          <p className={style.text}>Новости</p>
        </div>
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
