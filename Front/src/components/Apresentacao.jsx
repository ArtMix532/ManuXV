import ManuTitle from "./Title";
import FlorClara from "../assets/FlorClara2.png";
import ManuSelva from "../assets/ManuSelva.png"

function Apresentacao() {
  return (
    <div className="bg-ManuNeve w-screen h-screen">
      <div className="flex justify-end pr-8 pb-5">
        <p className="w-3/5 text-right text-xl font-lora text-gray-600">
          Tô passando pra falar que se você chegou nessse site saiba o quanto é
          importante sua presença na realização desse sonho: meus 15 anos. Aqui
          você encontrará todas as informações nescessárias para o meu grande
          dia.
        </p>
      </div>
      <div className="flex pl-20 pr-10">
        <div className="border-l-2 border-gray-400 pl-8 pr-20">
          <div className="flex items-end">
            <img src={FlorClara} alt="" style={{ width: "30px" }} />
            <ManuTitle Text="Meus 15 anos " />
          </div>
          <p className="text-xl font-lora text-gray-600">
            Esse momento foi muito esperado por mim desde pequena,
            principalmente vendo como havia sido a festa da minha irmã, se
            tornou um sonho para mim. Sou eternamente grata a Deus e
            principalmente aos meus pais e minha irmã por estarem me
            proporcionando esse momento ao lado de vocês, amigos e familiares.
            Agradeço também aos meus amigos, por tornarem a vida mais fácil com
            risadas e momentos inesquecíveis, e aos meus avós que sempre
            estiveram do meu lado me ajudando e apoiando nas minhas decisões.
            Conto com sua presença para tornar esse momento ainda mais especial
            e inesquecível.
          </p>
        </div>
        <img src={ManuSelva} alt="" style={{ width: "500px" }}/>
      </div>
    </div>
  );
}

export default Apresentacao;
