import React from "react";
interface BotaoProps {
  icone?: React.ReactNode;
  children: React.ReactNode;
}

const Botao = (props: BotaoProps) => {
  return (
    <>
      <button className="flex items-center justify-center gap-1 p-3 bg-white border-2 border-gray-200 rounded-full hover:bg-red-400 hover:border-red-400 hover:text-white">
        <span>{props.icone}</span>
        <span className="hidden sm:block">{props.children}</span>
      </button>
    </>
  );
};

export default Botao;
