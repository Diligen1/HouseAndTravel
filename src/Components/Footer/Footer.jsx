import style from "./Footer.module.css";
export function Footer() {
  const navbar = [
    {
      id: 1,
      icon: "fi fi-rr-home",
      name: "Главное",
    },
    {
      id: 2,
      icon: "fi fi-rr-pencil",
      name: "Отзыв",
    },
    {
      id: 3,
      icon: "fi fi-rr-picture",
      name: "Галерея",
    },
    {
      id: 4,
      icon: "fi fi-rr-apps",
      name: "Новости",
    },
  ];

  return (
    <main className={style.body}>
      <div className={style.block_title}>
        <h1 className={style.title}>Hourse and Travel</h1>
      </div>
      <div className={style.blocker}>
        {navbar.map((index) => (
          <div key={index.id} className={style.icon_block}>
            <i className={index.icon} />
            <p className={style.text}>{index.name}</p>
          </div>
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
