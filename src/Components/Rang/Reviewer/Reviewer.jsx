import style from "./Reviewer.module.css";
export function Reviewer({ avatar, name, title, star, text, rating, likes }) {
  return (
    <div className={style.block}>
      <div className={style.blocker}>
        <div className={style.ava_block}>
          <img src={avatar} alt={`${name}'s avatar`} className={style.ava} />
          <h3 className={style.name}>{name}</h3>
        </div>
        <div className={style.likes_contain}>
          <span>
            <i className="fi fi-ss-heart"></i>
            {likes}
          </span>
        </div>
      </div>
      <div className="info-container">
        <p className={style.star}>{star}</p>
        <h4 className={style.title}>{title}</h4>
        <p className={style.text}>{text}</p>
      </div>
    </div>
  );
}
