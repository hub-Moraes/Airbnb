"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Botao from "@/src/components/Botao";
import { IconAdjustmentsHorizontal } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";

const icones = [
  {
    id: "0001",
    description: "Piscina",
    source: "https://web.codans.com.br/airbnb/img/icon/0001.jpg",
    url: "/piscina",
  },
  {
    id: "0002",
    description: "Icônicos",
    source: "https://web.codans.com.br/airbnb/img/icon/0002.jpg",
    url: "/iconicos",
  },
  {
    id: "0003",
    description: "Chalés",
    source: "https://web.codans.com.br/airbnb/img/icon/0003.jpg",
    url: "/chales",
  },
  {
    id: "0008",
    description: "Pousadas",
    source: "https://web.codans.com.br/airbnb/img/icon/0010.jpg",
    url: "/pousadas",
  },
  {
    id: "0009",
    description: "No interior",
    source: "https://web.codans.com.br/airbnb/img/icon/0009.jpg",
    url: "/interior",
  },
  {
    id: "0010",
    description: "Containêres",
    source: "https://web.codans.com.br/airbnb/img/icon/0008.jpg",
    url: "/containeres",
  },
  {
    id: "0013",
    description: "Microcasas",
    source: "https://web.codans.com.br/airbnb/img/icon/0013.jpg",
    url: "/microcasas",
  },
  {
    id: "0014",
    description: "Fazendas",
    source: "https://web.codans.com.br/airbnb/img/icon/0014.jpg",
    url: "/fazendas",
  },
  {
    id: "0015",
    description: "Mansões",
    source: "https://web.codans.com.br/airbnb/img/icon/0015.jpg",
    url: "/mansoes",
  },
  {
    id: "0016",
    description: "Ilhas",
    source: "https://web.codans.com.br/airbnb/img/icon/0016.jpg",
    url: "/ilhas",
  },
  {
    id: "0018",
    description: "Luxe",
    source: "https://web.codans.com.br/airbnb/img/icon/0018.jpg",
    url: "/luxe",
  },
  {
    id: "0019",
    description: "Uau!",
    source: "https://web.codans.com.br/airbnb/img/icon/0019.jpg",
    url: "/uau",
  },
  {
    id: "0020",
    description: "Castelos",
    source: "https://web.codans.com.br/airbnb/img/icon/0020.jpg",
    url: "/castelos",
  },
];

const NavegacaoHorizontal = () => {
  return (
    <div className="fixed bottom-0 w-full bg-white py-2 flex flex-row items-center mt-4 max-w-7xl m-auto px-5 z-1 sm:relative">
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        breakpoints={{
          640: { slidesPerView: 4 },
          764: { slidesPerView: 6 },
          1024: { slidesPerView: 8 },
          1280: { slidesPerView: 10 },
        }}
      >
        {icones.map((icone, indice) => (
          <SwiperSlide key={indice}>
            <Link
              href={icone.url}
              className="flex flex-col items-center text-xs hover:text-red-400"
            >
              <Image className="w-4 sm:w-auto"
                src={icone.source}
                alt={icone.description}
                width={24}
                height={24}
              />
              <span>{icone.description}</span>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <Botao icone={<IconAdjustmentsHorizontal size={18} />}>Filtos</Botao>
    </div>
  );
};

export default NavegacaoHorizontal;
