import Accommodation from "../widgets/Accommodation";
import BarraPesquisa from "../widgets/BarraPesquisa";
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
        <Accommodation />
      </main>

      <footer className="max-w-7xl mx-auto py-2 mb-17 sm:mb-0">
        <div>Rodapé</div>
      </footer>
    </>
  );
}
