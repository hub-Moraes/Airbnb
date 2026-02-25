import { IconBrandFacebookFilled, IconBrandInstagram, IconBrandX, IconWorld } from "@tabler/icons-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div  className="bg-gray-100 w-full py-5 mb-17 pb-20  border-t-2 mt-10 border-gray-200 sm:mb-0">
        <div className="max-w-7xl m-auto px-4 ">
            <span className="font-bold">&copy; 2026 Airbnb, Inc.</span>
            <div className="justify-between text-sm py-2 sm:flex">
                <ul className="flex gap-2">
                    <li className="hover:border-b-2"><Link href="/">Privacidade</Link></li>
                    <li>&middot;</li>
                    <li className="hover:border-b-2"><Link href="/">Termos</Link></li>
                    <li>&middot;</li>
                    <li className="hover:border-b-2"><Link href="/">Informaçõe da Empresa</Link></li>
                </ul>

                <ul className="gap-4 items-center sm:flex">
                    <div className="flex gap-4 pt-4 sm:pt-0">
                        <li>
                        <Link className="flex gap-1" href="/">
                            <IconWorld size={20}/>
                            <span className="font-semibold">Português(BR)</span>
                        </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <span className="font-bold">R$ BRL</span>
                            </Link>
                        </li>
                    </div>
                    <div className="flex gap-4 pt-4 sm:pt-0">
                        <li>
                        <Link className="hover:opacity-70" target="_blank" href="https://www.facebook.com/AirbnbBrasil">
                            <IconBrandFacebookFilled size={20}/>
                        </Link>
                        </li>
                        <li>
                            <Link className="hover:opacity-70" target="_blank" href="https://x.com/airbnb_br">
                                <IconBrandX size={20}/>
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:opacity-70" target="_blank" href="https://www.instagram.com/airbnb">
                                <IconBrandInstagram size={20}/>
                            </Link>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    </div>
    );
};

export default Footer;
