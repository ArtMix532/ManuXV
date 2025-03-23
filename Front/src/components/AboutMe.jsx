import ManuSelva from "../assets/ManuSelva.png";
import { SectionTitle } from "./SectionTitle";

export function AboutMe() {
  return (
    <div className="flex flex-col">
      <p className="font-lora text-gray-600">
        Tô passando pra falar que se você chegou nessse site saiba o quanto é
        importante sua presença na realização desse sonho: meus 15 anos. Aqui
        você encontrará todas as informações nescessárias para o meu grande dia.
      </p>
      <div className="mt-4">
        <SectionTitle text="Meus 15 Anos" />
        <img src={ManuSelva} alt="" />
        <p className="font-lora text-gray-600 mt-4">
          Esse momento foi muito esperado por mim desde pequena, principalmente
          vendo como havia sido a festa da minha irmã, se tornou um sonho para
          mim. Sou eternamente grata a Deus e principalmente aos meus pais e
          minha irmã por estarem me proporcionando esse momento ao lado de
          vocês, amigos e familiares. Agradeço também aos meus amigos, por
          tornarem a vida mais fácil com risadas e momentos inesquecíveis, e aos
          meus avós que sempre estiveram do meu lado me ajudando e apoiando nas
          minhas decisões. Conto com sua presença para tornar esse momento ainda
          mais especial e inesquecível.
        </p>
      </div>
    </div>
  );
}
