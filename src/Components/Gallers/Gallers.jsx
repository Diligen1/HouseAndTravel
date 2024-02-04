import style from "./Gallers.module.css";

export function Gallers() {
  const info = [
    {
      id: 1,
      image: "",
      title: "Title",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eiusquidem cupiditate quisquam facilis deleniti laborum magni blanditiis odio ipsa incidunt adipisci minus unde quos, optio facere!",
    },
    {
      id: 2,
      image: "",
      title: "Title",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eiusquidem cupiditate quisquam facilis deleniti laborum magni blanditiis odio ipsa incidunt adipisci minus unde quos, optio facere!",
    },
    {
      id: 3,
      image: "",
      title: "Title",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eiusquidem cupiditate quisquam facilis deleniti laborum magni blanditiis odio ipsa incidunt adipisci minus unde quos, optio facere!",
    },
    {
      id: 4,
      image: "",
      title: "Title",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eiusquidem cupiditate quisquam facilis deleniti laborum magni blanditiis odio ipsa incidunt adipisci minus unde quos, optio facere!",
    },
  ];
  return (
    <main className={style.body}>
      <div className={style.title_contain}>
        <h1>Наши Услуги </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eius
          quidem cupiditate quisquam facilis deleniti laborum magni blanditiis,
          odio ipsa incidunt adipisci minus unde quos, optio facere! At,
          eligendi natus?
        </p>
      </div>
      <div className={style.info_contain}>
        {info.map((value, index) => (
          <div key={index} className={style.info}>
            <img src={value.img} alt="img" />
            <h2>{value.title}</h2>
            <p>{value.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
