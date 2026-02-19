import Header from "../widgets/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto border-blue-500 border-2">
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
