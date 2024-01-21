import style from "./Main.module.css";
import { Header } from "../../Components/Header/Header";
import { Banner } from "../../Components/Banner/Banner";
import { Information } from "../../Components/Gallery/Gallery";
import { Rating } from "../../Components/Information/Information";
import { Footer } from "../../Components/Footer/Footer";
import { Block_info } from "../../Components/block_info/Block_info";
import { Reyting } from "../../Components/Rang/Rang";
export function Main() {
  return (
    <main className={style.body}>
      <Header className={style.header} />
      <Banner className={style.banner} />
      <Block_info />
      <h1 className={style.title}>Галерея</h1>
      <Information />
      <p className={style.nav_photo}>Показать ещё</p>
      <Rating />
      <Reyting />
      <Footer />
    </main>
  );
}
