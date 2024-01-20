// Banner.js

import React, { useEffect } from "react";
import style from "./Banner.module.css";
import image from "../../image/banner.jpeg";

export function Banner() {
  return (
    <main className={style.body}>
      <div className={style.block_img}>
        <img src={image} alt="#" className={style.img} />
      </div>
      <div className={style.block_title}>
        <h1 className={style.title}>Hourse and Travel</h1>
      </div>
    </main>
  );
}
