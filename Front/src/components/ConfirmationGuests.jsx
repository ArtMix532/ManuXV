import { InputConfirmation } from "./InputConfimation";
import { RadioCustomIcon } from "./RadioCustomIcon";
import { useRef, useState } from "react";
import React from "react";

export function ConfirmationGuests({
  nameConvidado,
  acompanhantes,
  temAcompanhantes,
  setTemAcompanhantes,
  idConvidado,
}) {
  const [presenca, setPresenca] = useState("Não");

  const inputRefs = useRef([]);


  if (inputRefs.current.length !== acompanhantes) {
    inputRefs.current = Array(acompanhantes)
      .fill()
      .map((_, i) => inputRefs.current[i] || React.createRef());
  }

  const postAcompanhantes = async () => {
    setTemAcompanhantes(false);

    const nomes = inputRefs.current.map((ref) => ref.current?.value);
    let numConvidados = 0;

    for (let i = 0; i < nomes.length; i++) {
      if (nomes[i] == "") {
        numConvidados = numConvidados + 1;
        continue;
      } else {
        try {
          const response = await fetch("http://localhost:8080/convidados", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              convidado: {
                id: idConvidado,
              },
              name: nomes[i],
            }),
          });

          if (!response.ok) {
            console.error("Erro ao salvar acompanhante:", nomes[i]);
          }
        } catch (error) {
          console.error("Erro ao salvar acompanhante:", nomes[i], error);
        }
      }
    }

    acompanhantes = numConvidados;

    try {
      const response = await fetch(
        `http://localhost:8080/convidado/${idConvidado}?presenca=${presenca}&convidados=${acompanhantes}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        console.error("Erro ao atualizar presença!");
      } else {
        const data = await response.json();
        console.log("Presença atualizada com sucesso:", data);
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  if (!temAcompanhantes) {
    return (
      <p className="font-lora text-gray-600 mt-4 pb-4 md:flex md:flex-col md:text-center">
        Favor digitar o código de confirmação de presença disponível no seu
        convite, e confirmar até dia 31/05 <br /> <br />
        Atenção: crianças menores de 12 anos não precisam ser incluídas como
        acompanhantes
      </p>
    );
  } else {
    return (
      <div className="pb-4 relative md:flex md:flex-col md:text-center">

        <p className="font-lora text-gray-600 mt-4">
          {nameConvidado}, você estará presente nos tão sonhados 15 anos da
          Manu?
        </p>

        <div>
          <RadioCustomIcon presenca={presenca} setPresenca={setPresenca} />
        </div>

        {acompanhantes > 0 ? (
          <>
            <p className="font-lora text-gray-600 mt-4">
              Insira o nome de seus acompanhantes. Você pode levar até{" "}
              {acompanhantes} acompanhante(s).
            </p>

            {Array.from({ length: acompanhantes }, (_, i) => (
              <InputConfirmation key={i} ref={inputRefs.current[i]} />
            ))}

            <div className="flex items-center flex-col">
              <button
                onClick={postAcompanhantes}
                className="font-lora text-2xl my-4 px-6 w-40 text-gray-600 bg-transparent rounded-full h-28 border border-gray-400"
              >
                Confirmar
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center flex-col">
            <button
              onClick={postAcompanhantes}
              className="font-lora text-2xl my-4 px-6 w-40 text-gray-600 bg-transparent rounded-full h-28 border border-gray-400"
            >
              Confirmar
            </button>
          </div>
        )}
      </div>
    );
  }
}
