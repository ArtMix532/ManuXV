import Sorriso from "../assets/Sorriso.png";

export function Hero() {
  return (
    <div className="relative py-12 ">
      <p className="text-4xl font-bold text-ManuRoxoTitulo absolute font-lora top-[22px]">
        OLÁ,
      </p>
      <img src={Sorriso} alt="" className="px-12" />
      <p className="text-4xl font-bold text-ManuRoxoTitulo absolute font-lora right-0 bottom-[12px]">Aqui é a Manu</p>
    </div>
  );
}
