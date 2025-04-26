import { InputConfirmation } from "./InputConfimation";
import { RadioCustomIcon } from "./RadioCustomIcon";
import { useRef, useState } from "react";
import React from "react";
import { Alert } from "./Alert";

export function ConfirmationGuests({
  nameConvidado,
  acompanhantes,
  temAcompanhantes,
  setTemAcompanhantes,
  idConvidado,
}) {
  const [presenca, setPresenca] = useState("Não");

  // Cria uma array de refs
  const inputRefs = useRef([]);

  const [alertMessage, setAlertMessage] = useState(null);
  const showAlert = (title, message, type) => {
    setAlertMessage(null);
    setTimeout(() => {
      setAlertMessage({ title, message, type });
    }, 10);
  };

  // Garante que sempre tenha a quantidade correta de refs
  if (inputRefs.current.length !== acompanhantes) {
    inputRefs.current = Array(acompanhantes)
      .fill()
      .map((_, i) => inputRefs.current[i] || React.createRef());
  }

  const postAcompanhantes = async () => {
    setTemAcompanhantes(false);
    console.log("ID do convidado:", idConvidado);
    console.log("Presença:", presenca);

    // Pega os valores dos inputs
    const nomes = inputRefs.current.map((ref) => ref.current?.value);

    let numConvidados = 0; // Use 'let' ao invés de 'const' pois será incrementado

    for (let i = 0; i < nomes.length; i++) {
      if (nomes[i] == "") {
        numConvidados = numConvidados + 1;
        console.log("oi");
        continue; // pula para a próxima iteração se o nome estiver vazio
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
      showAlert("Sucesso", "Arquivo enviado com sucesso!", "success");

      if (!response.ok) {
        console.error("Erro ao atualizar presença!");
      } else {
        const data = await response.json();
        console.log("Presença atualizada com sucesso:", data);

      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }

    console.log("Nomes acompanhantes:", nomes);
    console.log(numConvidados);
  };

  if (!temAcompanhantes) {
    return (
      <p className="font-lora text-gray-600 mt-4 pb-4">
        Favor digitar o nome da pessoa para quem o convite foi enviado, e
        confirmar a presença até dia 18/05
      </p>
    );
  } else {
    return (
      <div className="pb-4 ">
        {alertMessage && (
          <Alert
            key={alertMessage.key}
            title={alertMessage.title}
            message={alertMessage.message}
            type={alertMessage.type}
            onClose={() => setAlertMessage(null)}
          />
        )}
        <p className="font-lora text-gray-600 mt-4">
          {nameConvidado}, você estará presente nos tão sonhados 15 anos da
          Manu?
        </p>
        <div>
          <RadioCustomIcon presenca={presenca} setPresenca={setPresenca} />
        </div>
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
      </div>
    );
  }
}
