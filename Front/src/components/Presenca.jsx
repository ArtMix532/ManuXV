import FlorClara from "../assets/FlorClara2.png";
import { RadioCustomStyles } from "./RadioButton";
import ManuTitle from "./Title";

function Presenca() {
  return (
    <div className="bg-ManuNeve w-screen h-screen grid grid-cols-2 pt-4">
      <div>
        <img src="https://placehold.co/600x400" alt="" />
      </div>
      <div className="flex flex-col  text-center tems-start pr-6">
        <div className="flex  items-center">
          <img src={FlorClara} alt="" style={{ width: "30px" }} />
          <ManuTitle Text={"Confirmação de Presença"} />
        </div>
        <div className="border-l-2 px-6 text-start border-gray-400 flex gap-6 flex-col">
          <p className="text-xl font-lora text-gray-600">
            Para nos ajudar com o planejamento desse dia tão especial, é muito
            importante que você confirme sua presença e de seus acompanhantes!
          </p>
          <input
            type="text"
            className="border w-3/4 px-2 font-lora text-center text-gray-600 text-2xl py-1 mx-auto focus:outline-none border-gray-400 bg-transparent"
          />
          <p className="text-xl font-lora text-gray-600">
            Favor digitar o nome da pessoa para quem o convite foi enviado, e
            confirmar a presença até dia 18/05
          </p>
          <p className="text-xl font-lora text-gray-600">
            /Nome Da Pessoa\, você estará presente nos tãos sonhados 15 anos da
            Manu?
          </p>
          <RadioCustomStyles />
          <p className="text-xl font-lora text-gray-600">
            Insira o nome de seus acompanhantes. Você pode levar até /N\
            acompanhantes
          </p>
          <input
            type="text"
            className="border w-3/4 px-2 font-lora text-center text-gray-600 text-2xl py-1 mx-auto focus:outline-none border-gray-400 bg-transparent"
          />
          <input
            type="text"
            className="border w-3/4 px-2 font-lora text-center text-gray-600 text-2xl py-1 mx-auto focus:outline-none border-gray-400 bg-transparent"
          />
        </div>
      </div>
    </div>
  );
}

export default Presenca;
