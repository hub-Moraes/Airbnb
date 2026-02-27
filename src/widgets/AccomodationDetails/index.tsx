import { IconAlarmSmoke, IconBrandCarbon, IconDesk, IconDog, IconParking, IconPhoto, IconPool, IconSailboat, IconToolsKitchen2, IconWifi } from "@tabler/icons-react";


const AccommodationDetails = () => {
  return (
        <div className="py-4 sm:col-span-1">
            <h2 className="font-bold text-xl">Espaço inteiro: Casa de campo em minas gerais</h2>
            <ul className="flex gap-2 text-sm">
                <li>10 Hóspedes</li>
                <li>&middot;</li>
                <li>5 Quartos</li>
                <li>&middot;</li>
                <li>5 Camas</li>
                <li>&middot;</li>
                <li>6 Banheiros</li>
            </ul>
            <h2 className="font-bold text-md pt-6">O que esse lugar oferece?</h2>
            <ul className="grid grid-cols-2 gap-4 py-6 text-sm">
                <li className="flex gap-1.5 items-center">
                    <IconPhoto/>
                    <span>Vista para as montanhas</span>
                </li>
                <li className="flex gap-1.5 items-center">
                    <IconToolsKitchen2/>
                    <span>Cozinha</span>
                </li>
                <li className="flex gap-1.5 items-center">
                    <IconDesk/>
                    <span>Espaço de trabalho exclusivo</span>
                </li>
                <li className="flex gap-1.5 items-center">
                    <IconPool/>
                    <span>Piscina privativa</span>
                </li>
                <li className="flex gap-1.5 items-center">
                    <IconBrandCarbon/>
                    <span className="line-through">Alarme de segurança pra gás</span>
                </li>
                <li className="flex gap-1.5 items-center">
                    <IconSailboat/>
                    <span>Vista para as águas</span>
                </li>
                <li className="flex gap-1.5 items-center">
                    <IconWifi/>
                    <span>Wifi rápido (8.3 Mbps)</span>
                </li>
                <li className="flex gap-1.5 items-center">
                    <IconParking/>
                    <span>Estacionamento incluído</span>
                </li>
                <li className="flex gap-1.5 items-center">
                    <IconDog/>
                    <span>Permitido animais</span>
                </li>
                <li className="flex gap-1.5 items-center">
                    <IconAlarmSmoke/>
                    <span className="line-through">Detector de fumaça</span>
                </li>
            </ul>
        </div>
    );
};

export default AccommodationDetails;
