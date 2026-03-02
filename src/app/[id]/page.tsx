
import { fetchDataById } from "@/src/utils/api";
import AccommodationTestimonials from "@/src/widgets/AccommodationTestimonials";
import AccommodationDetails from "@/src/widgets/AccomodationDetails";
import BarraPesquisa from "@/src/widgets/BarraPesquisa";
import Footer from "@/src/widgets/Footer";
import Gallery from "@/src/widgets/Gallery";
import Header from "@/src/widgets/Header";
import { notFound } from "next/navigation";

interface PageProps {
  id: string;
}

export default async function Page({ params }: { params: Promise<PageProps> }) {
  const {id} = await params;
  const accommodation = await fetchDataById(id)

  if( !accommodation ){
    notFound()
  }

  return (
    <>
      <header>
        <Header />
        <BarraPesquisa />
      </header>

      <hr className="mt-5 border border-gray-200" />

      <main>
        <h1 className="max-w-7xl m-auto px-4 text-2xl py-6 font-bold">
          {accommodation.title}
        </h1>
        <Gallery fotos={accommodation.photos} />
        <div className="w-full max-w-7xl m-auto px-4 sm:grid sm:grid-cols-2">
          <AccommodationDetails accommodation={accommodation}/>
          <AccommodationTestimonials testimonials={accommodation.testimonials} />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
