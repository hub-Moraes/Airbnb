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
      </main>

      <footer className="max-w-7xl mx-auto ">
        <div>Rodapé</div>
      </footer>
    </>
  );
}
