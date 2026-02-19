import Link from 'next/link';

export default function Menu() {
  return (
    <>
      <ul className="flex gap-7 text-lg">
        <li className="font-bold hover:text--400">
          <Link href="">Acomodações</Link>
        </li>
        <li className="opacity-60 hover:opacity-100">
          <Link href="">Experiências</Link>
        </li>
      </ul>
    </>
  );
}
