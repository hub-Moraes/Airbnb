import Accommodation from "@/src/components/Accommodation";
import { Accommodationss } from "@/src/types/AirbnbDados";
import Image from "next/image";
import Link from "next/link";

interface AccommodationsProps {
  accommodation: Accommodationss[]
}

const Accommodations = (
  props: AccommodationsProps
) => {

  const accommodations = props.accommodation

  return (
    <section className="max-w-7xl mx-auto px-5 py-6 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
      {accommodations.map((item, indice) => (
        <div key={indice}>
          <Link href={item.slug}>
            <Accommodation
              local={item.location.description}
              anfitriao={item.host}
              data={item.date}
              preco={item.price}
              avaliacao={item.rating}
              preferidoHospedes={item.hasBadge}

              >

              <Image
              className="w-full aspect-square object-cover rounded-3xl"
              src={item.photos[0].source}
              alt={item.photos[0].description}
              width={300}
              height={300}
              />
            </Accommodation>          
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Accommodations;
