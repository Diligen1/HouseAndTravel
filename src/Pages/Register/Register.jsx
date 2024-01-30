import style from "./Register.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
export function Register() {
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(!isActive);
  };
  return (
    <main className={style.body}>
      <div className={style.container}>
        <div className={`${style.left_block} ${isActive ? style.active : ""}`}>
          <div className={style.title_block}>
            <p className={style.title}>Регистарация</p>
            <p className={style.text}>Text</p>
          </div>
          <div className={style.input_contain}>
            <div className={style.input_block}>
              <input
                type="text"
                placeholder="Введите email"
                className={style.input}
              />
              <input
                type="text"
                placeholder="Введите пароль"
                className={style.input}
              />
            </div>
            <button className={style.btn}>Вход</button>
          </div>
        </div>
        <div className={`${style.right_block} ${isActive ? style.active : ""}`}>
          <div className={style.title_block}>
            <p className={style.title}>Авторизация</p>
            <p className={style.text}>Text</p>
          </div>
          <div className={style.input_contain}>
            <div className={style.input_block}>
              <input
                type="text"
                placeholder="Введите email"
                className={style.input}
              />
              <input
                type="text"
                placeholder="Введите Имя"
                className={style.input}
              />
              <input
                type="text"
                placeholder="Введите пароль"
                className={style.input}
              />
              <input
                type="text"
                placeholder="Повторите пароль"
                className={style.input}
              />
            </div>
            <Link to={"/"} className={style.btn}>
              Вход
            </Link>
          </div>
        </div>
        <div
          className={`${style.perehod} ${isActive ? style.active : ""}`}
        ></div>
        <div
          className={`${style.left_contain} ${isActive ? style.active : ""}`}
        >
          <h1 className={style.left_title}>Приветствую вас</h1>
          <p className={style.left_text}>
            Зарегестрируйтесь для дальнейшего использования
          </p>
          <button onClick={handleButtonClick} className={style.btn_author}>
            Авторизация
          </button>
        </div>
        <div
          className={`${style.right_contain} ${isActive ? style.active : ""}`}
        >
          <h1 className={style.right_title}>Привет Друг</h1>
          <p className={style.right_text}>
            Если вы уже зарегестрировались введите свои данные
          </p>
          <button onClick={handleButtonClick} className={style.btn_register}>
            Регистарация
          </button>
        </div>
      </div>
    </main>
  );
}
