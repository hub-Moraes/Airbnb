import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image className="hidden sm:block" src="/img/Airbnb_Logo.svg" alt="logo" width={120} height={40} />
    </Link>
  );
}
