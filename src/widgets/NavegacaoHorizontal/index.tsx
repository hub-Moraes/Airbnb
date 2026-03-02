"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Botao from "@/src/components/Botao";
import { IconAdjustmentsHorizontal } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import { Icons } from "@/src/types/AirbnbDados";

interface NavegacaoHorizontalProps {
  Icons: Icons[]
}

const NavegacaoHorizontal = (
  props: NavegacaoHorizontalProps
) => {

  const icones = props.Icons

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
              <Image className="w-4 sm:w-6"
                src={icone.source}
                alt={icone.description}
                width={24}
                height={24}
              />
              <span className="hidden sm:block">{icone.description}</span>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <Botao icone={<IconAdjustmentsHorizontal size={18} />}>Filtros</Botao>
    </div>
  );
};

export default NavegacaoHorizontal;
