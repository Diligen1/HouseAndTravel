import style from "./Footer.module.css";
export function Footer() {
  return (
    <main className={style.body}>
      <div className={style.title_contain}>
        <h1 className={style.title}>House and Travel</h1>
        <p className={style.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolor
          eos amet quisquam dolorem totam asperiores quia recusandae temporibus,
          commodi eligendi corrupti quidem, labore rem, ipsam harum eaque fugiat
          molestiae.
        </p>
      </div>
      <div className={style.contact_contain}>
        <h1 className={style.contact_text}>Контакты</h1>
        <p className={style.email}>zazaka71@gmail.com</p>
        <p className={style.adres}>ул. Пушкина 71.21</p>
        <p className={style.contact}>0(888)-35-35-55</p>
      </div>
      <div className={style.follows_contain}>
        <h1 className={style.follows_title}>Подпишись </h1>
        <div className={style.follows_icon}>
          <i className="fi fi-brands-instagram"></i>
          <i className="fi fi-brands-facebook"></i>
          <i className="fi fi-brands-whatsapp"></i>
          <i className="fi fi-brands-telegram"></i>
        </div>
      </div>
    </main>
  );
}
