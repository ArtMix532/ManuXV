import LogoManu from "../assets/LogoManu2.png";

export function Footer() {
  return (
    <div className="bg-ManuRoxoFooter w-full md:flex md:flex-col md:text-center md:items-center">
      <div className="flex mx-2 py-3 ">
        <img src={LogoManu} alt="" className="h-10 " />
        <p className="text-gray-200 font-lora mt-2">
          Venha fazer parte desse sonho conosco!
        </p>
      </div>
      <div className="flex mx-2 py-3 gap-3">
        <p className="font-lora text-gray-200 mt-1">Telefones úteis: </p>
        <p className="font-lora text-gray-200 mt-1">
          Adriano (pai): (31) 991884397 <br />
          Nomária (mãe): (31) 991288282 <br />
          Giullie (irmã): (31) 991369331
        </p>
      </div>
      <div className="flex justify-center mx-2 py-3 mt-4">
        <p className="font-bold text-gray-200">
          Feito por{" "}
          <a
            target="_blank"
            className="hover:text-gray-400 underline"
            href="https://artmix532.github.io/Dav.Links/"
          >
            Davi Benjamim
          </a>
        </p>
      </div>
    </div>
  );
}
