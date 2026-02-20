import Botao from "@/src/components/Botao";
import Logo from "@/src/components/Logo";
import Menu from "@/src/components/Menu";
import { IconUser } from "@tabler/icons-react";

export default function Header() {
  return (
    <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
      <Logo />

      <Menu />

      <Botao icone={<IconUser size={18} />}>Entrar</Botao>
    </div>
  );
}
