import BarraPesquisa from "../widgets/BarraPesquisa";
import Header from "../widgets/Header";

export default function Home() {
  return (
    <>
      <header>
        <Header />
        <BarraPesquisa />
      </header>

      <hr className="mt-7 border border-gray-200" />

      <main className="mt-20 max-w-7xl mx-auto border-blue-500 border-2">
        <section>
          <div>Conteudo</div>
        </section>
      </main>

      <footer className="max-w-7xl mx-auto border-yellow-500 border-2">
        <div>Rodapé</div>
      </footer>
    </>
  );
}
