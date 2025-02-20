import FlorClara from "../assets/FlorClara2.png";
import ManuTitle from "./Title";


function Festa() {
  return (
    <div className="bg-ManuNeve w-screen h-screen">
      <div className="flex pl-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.6160598420306!2d-43.9945849!3d-19.856191900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69109da55788f%3A0x76814e3de59c6f49!2sAv.%20Otac%C3%ADlio%20Negr%C3%A3o%20de%20Lima%2C%206464%20-%20Bandeirantes%20(Pampulha)%2C%20Belo%20Horizonte%20-%20MG%2C%2031340-595!5e0!3m2!1spt-BR!2sbr!4v1738194937597!5m2!1spt-BR!2sbr"
          style={{ border: 0, width: "100%", height: "450px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="pl-32 pr-8">
          <div className="border-t-2 border-gray-400 flex flex-col gap-8 text-right ">
            <div className="flex justify-end items-center">
              <img src={FlorClara} alt="" style={{ width: "30px" }} />
              <ManuTitle Text={"A Festa"}/>
            </div>
            <p className="text-xl font-lora text-gray-600">
              {" "}
              Minha festa vai ser no dia 19 de junho de 2025, no espaço Miriam
              Rios Buffet. O endereço é Av. Otacílio Negrão de Lima, 6464-
              Bandeirantes.
            </p>
            <p className="text-xl font-lora text-gray-600">
              Acho importante lembrar a todos que estaremos em um mês frio,
              então levem roupas adequadas, sempre segundo o traje esporte fino,
              é claro. Mas não se preocupem, o espaço da festa é fechado e
              climatizado, vamos construir um clima bem aconchegante lá dentro.{" "}
            </p>
            <p className="text-xl font-lora text-gray-600">
              Para te ajudar a se programar no trajeto, essa página conta com um
              link para o Google Maps, acesse para se localizar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Festa;
