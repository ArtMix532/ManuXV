import ManuTitle from "./Title";

function Presentes() {
  return (
    <div className="bg-blue-gray-400 w-screen h-screen px-6 flex ">
      <div className="">
        <div>
          <ManuTitle Text={"Presentes"} />
        </div>
        <p>
          Você já sabe né? O que importa de verdade é sua presença nesse dia tão
          especial!
        </p>
        <p>
          Mas, para o caso de você querer dar um agradinho para a debutante ou
          para seu pai (aniversariante do dia 19), não estamos negando nenhum
          mimo
        </p>

        <div>
          <h1>O que comprar para Manu?</h1>
          <ul>
            <li> Bijuterias/Semi Joias: de preferência prateadas</li>
            <li> Calças/ Shorts/ Saias: Tamanho 44</li>
            <li> Blusas/ Peças de roupa em geral: Tamanho G</li>
            <li> Sapatos: Tamanho 39</li>
            <li>
              Perfumes/ Fragrâncias: Preferência por cheiros marcantes, frutados
              e florais
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h1>Sugestões de lojas:</h1>
      </div>
    </div>
  );
}

export default Presentes;
