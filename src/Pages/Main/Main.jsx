import style from "./Main.module.css";
import { Header } from "../../Components/Header/Header";
import { Banner } from "../../Components/Banner/Banner";
import { Information } from "../../Components/Info/Info";
import { Rating } from "../../Components/Rang/Rang";
import { Footer } from "../../Components/Footer/Footer";
import { Block_info } from "../../Components/block_info/Block_info";
export function Main() {
  return (
    <main className={style.body}>
      <Header className={style.header} />
      <Banner className={style.banner} />
      <Block_info />
      <h1>Галерея</h1>
      <Information />
      <Rating />
      <Footer />
    </main>
  );
}
