import { fetchData } from "../utils/api";
import Accommodations from "../widgets/Accommodations";
import BarraPesquisa from "../widgets/BarraPesquisa";
import Footer from "../widgets/Footer";
import Header from "../widgets/Header";
import NavegacaoHorizontal from "../widgets/NavegacaoHorizontal";

export default async function Home() {
  
  const dados = await fetchData()

  return (
    <>
      <header>
        <Header />
        <BarraPesquisa />
      </header>

      <hr className="mt-5 border border-gray-200" />

      <main>
        <NavegacaoHorizontal Icons={dados.icons}/>
        <Accommodations accommodation={dados.accommodation} />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
