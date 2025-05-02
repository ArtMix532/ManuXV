import FlorClara from "../assets/FlorClara2.png";
import ManuGradiente from "../assets/ManuGradiente.png";
import ManuLago from "../assets/ManuLago.png";
import { useEffect, useState } from "react";

export function Gifts() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);
  return (
    <div
      style={{
        backgroundImage: isMobile ? `url(${ManuGradiente})` : "none",
      }}
      className="mt-4 bg-cover bg-no-repeat bg-center md:bg-none md:bg-ManuRoxo md:grid md:grid-cols-2"
    >
      <div>
        <div className="px-4 ">
          <div className="flex gap-1 items-center">
            <img src={FlorClara} alt="" className="h-14" />
            <span className="text-2xl font-bold font-lora text-ManuNeve">
              Presentes
            </span>
          </div>
        </div>
        <div className="px-4 mt-4 flex justify-between gap-6 md:gap-0 md:flex-col md:p-4 ">
          {/* <img src={ManuGradiente} alt="" /> */}
          <p className="font-lora text-white w-4/6 ">
            Você já sabe né? O que importa de verdade é sua presença nesse dia
            tão especial!
            <br />
            <br />
            Mas, para o caso de você querer dar um agradinho para a debutante ou
            para seu pai (aniversariante do dia 19), não estamos negando nenhum
            mimo ; )
          </p>
          <div className="pt-44 md:pt-4">
            <p className="bg-ManuNeve px-4 py-2 font-lora text-gray-600 text-xs opacity-90 md:w-6/12">
              O que comprar para Manu?
              <ul className="list-disc">
                <li>Bijuterias/Semi Joias: de preferência prateadas</li>
                <li>Calças/ Shorts/ Saias: Tamanho 44</li>
                <li> Blusas/ Peças de roupa em geral: Tamanho G</li>
                <li> Sapatos: Tamanho 39</li>
                <li>
                  Perfumes/ Fragrâncias: Preferência por cheiros marcantes,
                  frutados e florais
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div className="h-full flex mx-auto my-auto">
        <img src={ManuLago} alt="" className="" />
      </div>
    </div>
  );
}
