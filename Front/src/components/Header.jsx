import { Divider } from "./Divider";
import LogoManu from "../assets/LogoManu2.png";
import FlorEscura from "../assets/FlorEscura.png";

export function Header() {
  return (
    <div>
      <Divider />
      <div className="pt-3 flex justify-between px-2">
        <img src={LogoManu} alt="" className="h-16 md:h-24" />
        <a
          className="px-5 py-2 font-bold text-ManuNeve gap-2 bg-ManuLilasButton flex text-center rounded-full font-lora text-xl items-center"
          href="#confirmation"
        >
          <img src={FlorEscura} alt="" style={{ width: "30px" }} />
          Confirmar <br /> presença
        </a>
      </div>
    </div>
  );
}
