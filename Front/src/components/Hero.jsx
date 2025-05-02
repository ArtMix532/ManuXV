import Sorriso from "../assets/Sorriso.png";

export function Hero() {
  return (
    <div className="relative py-12 md:flex md:items-center">
      <p className="text-4xl font-bold text-ManuRoxoTitulo absolute font-lora top-[22px] md:left-[390px]">
        OLÁ,
      </p>
      <img src={Sorriso} alt="" className="px-12 md:h-96 md:mx-auto" />
      <p className="text-4xl font-bold text-ManuRoxoTitulo absolute font-lora right-0 bottom-[24px] md:right-[300px]">
        Aqui é a Manu
      </p>
    </div>
  );
}
