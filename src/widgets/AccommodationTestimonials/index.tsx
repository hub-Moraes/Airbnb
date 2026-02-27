import { IconStarFilled } from "@tabler/icons-react";
import Image from "next/image";

const testimonials = [
    {
        "id": "aa625d67-8316-4996-970e-e13b36150cc4",
        "name": "Guterre",
        "image": "https://web.codans.com.br/airbnb/img/feedback/aa625d67-8316-4996-970e-e13b36150cc4.jpg",
        "comment": "Bacon ipsum dolor amet drumstick cupim ribeye bacon alcatra chislic kielbasa chicken, tri-tip spare ribs turkey meatball.",
        "rating": 5,
        "customerTime": 5,
        "createdAt": 5,
        "stayedAt": 5
    },
    {
        "id": "a01fd4e8-510c-46d2-a79a-c9dc8e8fbd22",
        "name": "Adónis",
        "image": "https://web.codans.com.br/airbnb/img/feedback/a01fd4e8-510c-46d2-a79a-c9dc8e8fbd22.jpg",
        "comment": "Bacon ipsum dolor amet porchetta tri-tip doner, chicken pork loin pork tenderloin meatball andouille frankfurter rump kevin.",
        "rating": 4,
        "customerTime": 5,
        "createdAt": 7,
        "stayedAt": 6
    },
    {
        "id": "e7450683-808f-4970-9d44-1154c9544639",
        "name": "Giovana",
        "image": "https://web.codans.com.br/airbnb/img/feedback/e7450683-808f-4970-9d44-1154c9544639.jpg",
        "comment": "Bacon ipsum dolor amet rump tri-tip picanha tail hamburger shank boudin pork cupim shoulder jerky pancetta.",
        "rating": 4.5,
        "customerTime": 3,
        "createdAt": 8,
        "stayedAt": 7
    }
]


const AccommodationTestimonials = () => {
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