import { Testimonials } from "@/src/types/AirbnbDados";
import { IconStarFilled } from "@tabler/icons-react";
import Image from "next/image";

interface AccommodationTestimonialsProps {
    testimonials: Testimonials[]
}
    
const AccommodationTestimonials = (
    props: AccommodationTestimonialsProps
) => {

    const testimonials = props.testimonials

  return (
        <div className="py-4 sm:col-span-1 sm:pl-1">
            <h2 className="font-bold text-xl">Depoimentos</h2>

            <div className="flex items-center text-sm gap-1">
                <IconStarFilled className="size-3"/>
                <span>4.9 (400+ avaliações)</span>
            </div>

            {testimonials.map((depoimento, indice)=>(
                <div key={indice} className="flex items-start pt-7">
                    <Image className="rounded-full"
                    src={depoimento.image}
                    alt={depoimento.name}
                    width={50}
                    height={50}
                    />
                    <div className="text-sm pl-3 pr-5">
                        <span className="font-bold">{depoimento.name}</span>
                        <p>{depoimento.comment}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AccommodationTestimonials;