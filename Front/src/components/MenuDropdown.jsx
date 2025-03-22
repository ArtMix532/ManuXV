import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import FlorClara from "../assets/FlorClara2.png";

export function MenuDefault() {
  return (
    <Menu>
      <MenuHandler>
        <Button className="flex bg-ManuLilasButton rounded-full font-lora text-2xl items-center">
          <img src={FlorClara} alt="" style={{ width: "30px" }} />
          Menu
        </Button>
      </MenuHandler>
      <MenuList>
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <MenuItem>Menu Item 3</MenuItem>
      </MenuList>
    </Menu>
  );
}
