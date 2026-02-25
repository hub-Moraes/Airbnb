'use client'
import { IconHeartFilled, IconStarFilled } from "@tabler/icons-react";
import React from "react";
interface AccommodationProps {
  children: React.ReactNode;
  local: string
  anfitriao: string
  data: string
  preco: number
  avaliacao: number
  preferidoHospedes: boolean

}

const Accommodation = ({children, local, anfitriao, data, preco, avaliacao, preferidoHospedes}: AccommodationProps) => {
  return (
    <figure className="relative">
        <div className="absolute w-full p-4 flex items-center justify-between">
            <div>
                {preferidoHospedes && (
                     <span className="bg-gray-100 inset-shadow-sm/10 shadow-gray-800 rounded-xl text-xs w-28 py-1 px-3 font-semibold sm:w-auto sm:rounded-full xl:text-sm">
                        Preferido dos hóspedes
                    </span>
                )}
            </div>

           
            <IconHeartFilled className="opacity-70 stroke-white hover:opacity-60" size={25}/>
        </div>

        {children}

        <figcaption className="text-xs pt-2 lg:text-sm">
            <div className="flex justify-between">
                <span className="font-bold">{local}</span>
                <div className="flex  items-center">
                    <IconStarFilled size={13}/>
                    <span>{avaliacao}</span>
                </div>
            </div>
            <div>Anfitriã(o): {anfitriao}</div>
            <div>{data}</div>
            <div className="flex">
                <div className="font-bold pr-1">R$ {preco}</div>
                <div>noite</div>
            </div>
        </figcaption>
    </figure>
  );
};

export default Accommodation;
