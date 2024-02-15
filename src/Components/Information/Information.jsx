import style from "./Information.module.css";
export function Information() {
  return (
    <main className={style.body}>
      <div className={style.info_block}>
        <h1 className={style.title}>Что такое Horse and Travel</h1>
        <p className={style.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          explicabo quos delectus reiciendis doloremque fugit et inventore vero,
          non veritatis perspiciatis ratione optio. Molestiae cupiditate,
          corporis provident aliquam a voluptatibus.
        </p>
      </div>
      <div className={style.info_block}>
        <h1 className={style.title}>Наша цель</h1>
        <p className={style.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          explicabo quos delectus reiciendis doloremque fugit et inventore vero,
          non veritatis perspiciatis ratione optio. Molestiae cupiditate,
          corporis provident aliquam a voluptatibus.
        </p>
      </div>
    </main>
  );
}
