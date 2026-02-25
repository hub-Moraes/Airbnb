import Accommodations from "../widgets/Accommodations";
import BarraPesquisa from "../widgets/BarraPesquisa";
import Footer from "../widgets/Footer";
import Header from "../widgets/Header";
import NavegacaoHorizontal from "../widgets/NavegacaoHorizontal";

export default function Home() {
  return (
    <>
      <header>
        <Header />
        <BarraPesquisa />
      </header>

      <hr className="mt-5 border border-gray-200" />

      <main>
        <NavegacaoHorizontal />
        <Accommodations />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
