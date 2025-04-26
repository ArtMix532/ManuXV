import { Divider } from "./Divider";
import LogoManu from "../assets/LogoManu2.png";
import { MenuDefault } from "./MenuDropdown";

export function Header() {
  return (
    <div>
      <Divider />
      <div className="pt-3 flex justify-between px-2">
        <img src={LogoManu} alt="" className="h-16 md:h-24" />
        <MenuDefault />
      </div>
    </div>
  );
}
