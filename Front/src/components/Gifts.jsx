import FlorClara from "../assets/FlorClara2.png";
import ManuGradiente from "../assets/ManuGradiente.png";


export function Gifts() {
  return (
    <div
      className="mt-4 "
      style={{ backgroundImage: `url(${ManuGradiente})` }}
    >
      <div className="px-4">
        <div className="flex gap-1 items-center">
          <img src={FlorClara} alt="" className="h-14" />
          <span className="text-2xl font-bold font-lora text-ManuNeve">
            Presentes
          </span>
        </div>
      </div>
      <div className="px-4 mt-4 flex justify-between gap-6">
        {/* <img src={ManuGradiente} alt="" /> */}
        <p className="font-lora text-white w-4/6">
          Você já sabe né? O que importa de verdade é sua presença nesse dia tão
          especial!
          <br />
          <br />
          Mas, para o caso de você querer dar um agradinho para a debutante ou
          para seu pai (aniversariante do dia 19), não estamos negando nenhum
          mimo ; )
        </p>
        <div className="pt-44">
          <p className="bg-ManuNeve px-4 py-2 font-lora text-gray-600 text-xs opacity-90">
            O que comprar para Manu? Bijuterias/Semi Joias: de preferência
            prateadas
            <br />
            Calças/ Shorts/ Saias: Tamanho 44
            <br />
            Blusas/ Peças de roupa em geral: Tamanho G
            <br />
            Sapatos: Tamanho 39
            <br />
            Perfumes/ Fragrâncias: Preferência por cheiros
            <br />
            marcantes, frutados e florais
          </p>
        </div>
      </div>
    </div>
  );
}
