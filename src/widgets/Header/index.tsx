import Botao from "@/src/components/Botao";
import Logo from "@/src/components/Logo";
import Menu from "@/src/components/Menu";
import { IconUser } from "@tabler/icons-react";

export default function Header() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
      <Logo />
      
      <div className="flex justify-center mx-auto">
        <Menu />
      </div>

      <div className="hidden sm:block">
        <Botao icone={<IconUser size={18} />}>Entrar</Botao>
      </div>
    </div>
  );
}
