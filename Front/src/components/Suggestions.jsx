import Marcas from "../assets/Marcas2.png";

export function Suggestions() {
  return (
    <div className="bg-ManuNeve w-5/6 mx-auto pt-4">
        <div className="px-4">
        <div className="flex gap-1 items-center">
          <span className="text-lg font-bold font-lora text-ManuRoxo">
            Sugestões de lojas
          </span>
        </div>
      </div>
      <img src={Marcas} alt="" />
    </div>
  );
}
