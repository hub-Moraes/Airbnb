interface BotaoProps {
  icone?: React.ReactNode;
  children: React.ReactNode;
}

const Botao = (props: BotaoProps) => {
  return (
    <>
      <button className="flex items-center justify-center gap-1 p-3 w-25  border-2 border-gray-200 rounded-full hover:bg-red-400 hover:border-red-400 hover:text-white">
        <span>{props.icone}</span>
        <span>{props.children}</span>
      </button>
    </>
  );
};

export default Botao;
