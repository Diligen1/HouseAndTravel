import style from "./Review.module.css";
import { useState } from "react";
export function Review() {
  const [count, setCount] = useState(0);

  const handleMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handlePlus = () => {
    setCount(count + 1);
  };

  const forma = [
    { id: 1, name: "kuba", title: "man" },
    { id: 2, name: "roma", title: "name" },
    { id: 3, name: "roma", title: "form" },
  ];
  return (
    <main className={style.body}>
      <p>Hello Review</p>
      {forma.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <input type="checkbox" />
          <input type="text" placeholder="name" />
        </div>
      ))}
      <button onClick={handlePlus}>plus</button>
      <p>{count}</p>
      <button onClick={handleMinus}>minus</button>
    </main>
  );
}
