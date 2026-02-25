import Image from "next/image";

export default function Logo() {
  return (
    <a href="">
      <Image className="hidden sm:block " src="/img/Airbnb_Logo.svg" alt="logo" width={120} height={40} />
    </a>
  );
}
