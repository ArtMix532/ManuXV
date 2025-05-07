import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import FlorEscura from "../assets/FlorEscura.png";

export function MenuDefault() {
  return (
    <Menu>
      <MenuHandler>
        <Button className="flex bg-ManuLilasButton rounded-full font-lora text-2xl items-center">
          <img src={FlorEscura} alt="" style={{ width: "30px" }} />
          Menu
        </Button>
      </MenuHandler>
      <MenuList>
        <a href="#about" className="scroll-smooth">
          <MenuItem>Sobre mim</MenuItem>
        </a>
        <a href="#location" className="scroll-smooth">
          <MenuItem>Local da festa</MenuItem>
        </a>
        <a href="#gifts" className="scroll-smooth">
          <MenuItem>Presentes</MenuItem>
        </a>
        <a href="#confirmation" className="scroll-smooth">
          <MenuItem>Confirmação de presença</MenuItem>
        </a>
      </MenuList>
    </Menu>
  );
}
