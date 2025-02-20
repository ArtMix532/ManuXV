import { MenuDefault } from "./MenuDropdown";
import LogoManu from "../assets/LogoManu2.png";
import { CarouselTransition } from "./Carousel";

function Home() {
  return (
    <div className="bg-ManuNeve w-screen pb-6">
      <div className="w-screen h-[2.5vh] bg-ManuRoxo"></div>
      <div className="pt-1 flex justify-between px-2 ">
        <img src={LogoManu} style={{ width: "200px" }} alt="" className="" />
        <div className="flex pt-2 pr-6">
          <MenuDefault />
        </div>
      </div>
      <div className="flex flex-col justify-center pt-14">
        <div className="flex  pl-80">
          <h1 className="text-6xl font-bold font-lora text-ManuRoxoTitulo">
            Olá,
          </h1>
        </div>
        <div className="flex mx-auto w-5/12">
          <CarouselTransition />
        </div>
        <div className="flex justify-end pr-44">
          <h1 className="text-6xl font-bold font-lora text-ManuRoxoTitulo">
            Aqui é a Manu
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
