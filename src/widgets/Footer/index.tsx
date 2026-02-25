import Link from "next/link";

const Footer = () => {
  return (
    <div  className="bg-gray-100 w-full py-5 mb-17 pb-20  border-t-2 mt-10 border-gray-200 sm:mb-0">
        <div className="max-w-7xl m-auto px-4">
            <span className="font-semibold">&copy; 2026 Airbnb, Inc.</span>
            <ul className="text-sm flex gap-2 pt-2">
                <li className="hover:border-b-2"><Link href="/"></Link>Privacidade</li>
                <li>&middot;</li>
                <li className="hover:border-b-2"><Link href="/"></Link>Termos</li>
                <li>&middot;</li>
                <li className="hover:border-b-2"><Link href="/"></Link>Informaçõe da Empresa</li>
            </ul>
        </div>
    </div>
  );
};

export default Footer;
