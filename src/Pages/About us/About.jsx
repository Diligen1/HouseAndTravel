import style from "./About.module.css";
import { Header } from "../../Components/Header/Header";
import { Banner2 } from "../../Components/Banner_2/Banner_2";
import { Block_info } from "../../Components/block_info/Block_info";
import { Our } from "../../Components/Our/Our";
import { Gallers } from "../../Components/Gallers/Gallers";
import { Footer } from "../../Components/Footer/Footer";
export function About() {
  return (
    <main className={style.body}>
      <Header />
      <Banner2 />
      <Block_info />
      <Our />
      <Gallers />
      <Footer />
    </main>
  );
}
