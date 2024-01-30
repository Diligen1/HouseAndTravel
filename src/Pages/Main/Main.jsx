import style from "./Main.module.css";
import { Header } from "../../Components/Header/Header";
import { Banner } from "../../Components/Banner/Banner";
import { Gallery } from "../../Components/Gallery/Gallery";
import { Information } from "../../Components/Information/Information";
import { Footer } from "../../Components/Footer/Footer";
import { Block_info } from "../../Components/block_info/Block_info";
import { Rating } from "../../Components/Rang/Rang";
import { Maps } from "../../Components/Maps/Maps";
export function Main() {
  return (
    <main className={style.body}>
      <Header className={style.header} />
      <Banner className={style.banner} />
      <Block_info className={style.block_info} />
      <h1 className={style.title}>Галерея</h1>
      <Gallery />
      <Information />
      <Rating />
      <Maps />
      <Footer />
    </main>
  );
}
