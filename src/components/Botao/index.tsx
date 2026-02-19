import { IconUser } from "@tabler/icons-react";

export default function Botao() {
  return (
    <button className="flex items-center justify-center gap-1 p-3 w-25  border-2 border-gray-200 rounded-full hover:bg-red-400 hover:border-red-400 hover:text-white">
      <IconUser size={18} />
      <span className="leading-none">Entrar</span>
    </button>
  );
}
