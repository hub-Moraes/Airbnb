import { IconSearch } from "@tabler/icons-react";

export default function BarraPesquisa() {
  return (
    <div className="flex items-center border-gray-200 border-2 max-w-xl rounded-full mx-auto shadow-xl shadow-gray-200">
      <input
        className="max-w-xl w-full ml-5 outline-none"
        type="text"
        placeholder="Buscar destinos e acomodações"
      />
      <IconSearch className="bg-red-400 rounded-full p-1.5 m-2 overflow-visible" size={38} color="white"/>
    </div>
  );
}
