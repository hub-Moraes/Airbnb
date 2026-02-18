import Image from "next/image";

export default function Logo() {
  return (
    <>
      <a href="">
        <Image src="/img/Airbnb_Logo.svg" alt="logo" width={120} height={40} />
      </a>
    </>
  );
}
