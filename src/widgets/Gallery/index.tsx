import Botao from "@/src/components/Botao"
import { IconPhoto } from "@tabler/icons-react"
import { on } from "events"
import Image from "next/image"
import Link from "next/link"

type Foto = {
    id: string
    source: string
    description: string
}

interface GalleryProps {
    fotos: Foto[]
}

const Gallery = (
    {fotos} : GalleryProps
) => {
  return (
     <div className="max-w-7xl m-auto px-4">
        <div className="grid grid-cols-4 auto-rows-[200px] rounded-2xl overflow-hidden gap-2 relative">
            {fotos.slice(0,5).map((foto, indice)=>{

            const primeiraFoto = indice == 0 ? 'col-span-2 row-span-2 ' : ''

            return (
                <div key={indice} className={`relative w-full h-full ${primeiraFoto}`}>
                    <Image
                    className="w-full h-full object-cover"
                    src={foto.source}
                    alt={foto.description}
                    width={1280}
                    height={720}
                    />
                </div>
            )
            })}
            <button className="flex absolute w-full h-full justify-end items-end p-2 ">
                <Link href={"/"}>
                    <Botao icone={<IconPhoto size={18} />}>Mais fotos</Botao>
                </Link>
            </button>
        </div>
        
        
        
        
     </div>
    );
};

export default Gallery;
