import { useState } from "react";
import style from "./StarRating.module.css";

export function StarRating({ onRate }) {
  const [rating, setRating] = useState(0);

  const ratingLabels = ["Ужасно", "Плохо", "Неплохо", "Хорошо", "Отлично"];

  const handleStarClick = (star) => {
    setRating(star);
    onRate(ratingLabels[star - 1]);
  };

  return (
    <div className={style.starRating}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={rating >= star ? style.starFilled : style.star}
          onClick={() => handleStarClick(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
}
