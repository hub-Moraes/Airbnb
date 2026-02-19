import Botao from "@/src/components/Botao";
import Logo from "@/src/components/Logo";
import Menu from "@/src/components/Menu";

export default function Header() {
  return (
    <header className="max-w-7xl mx-auto p-4 border-red-500 border-2 flex justify-between items-center">
      <Logo />

      <Menu />

      <Botao />
    </header>
  );
}
