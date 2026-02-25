import Botao from "@/src/components/Botao";
import Logo from "@/src/components/Logo";
import Menu from "@/src/components/Menu";
import { IconUser } from "@tabler/icons-react";

export default function Header() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
      <div className="">
        <Logo />
      </div>
      
      <div className="flex mx-auto sm:justify-center">
        <Menu />
      </div>

      <div>
        <Botao icone={<IconUser size={18} />}>Entrar</Botao>
      </div>
    </div>
  );
}
