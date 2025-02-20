import { Carousel } from "@material-tailwind/react";
import Sorriso from "../assets/Sorriso.png";
import Mata from "../assets/Mata.png";

export function CarouselTransition() {
  return (
    <Carousel transition={{ duration: 1 }} className="rounded-xl">
      <img src={Sorriso} alt="image 1" className="h-full w-full object-cover" />
      <img
        src={Mata}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}
