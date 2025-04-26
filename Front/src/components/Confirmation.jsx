import { SectionTitle } from "./SectionTitle";
import { SendHorizontal } from "lucide-react";
import { useRef, useState } from "react";
import { Alert } from "./Alert";

export function Confirmation({
  setAcompanhantes,
  setTemAcompanhantes,
  setNameConvidado,
  setIdConvidado,
}) {
  const inputRef = useRef(null);

  const [alertMessage, setAlertMessage] = useState(null);
  const showAlert = (title, message, type) => {
    setAlertMessage(null);
    setTimeout(() => {
      setAlertMessage({ title, message, type });
    }, 10);
  };

  const getAcompanhantes = async () => {
    const nameConvidado = inputRef.current.value;
    if (!nameConvidado.trim()) {
      console.error("O nome do convidado não pode estar vazio.");
      return;
    } else {
      try {
        const response = await fetch(
          "http://localhost:8080/convidado/nome/" +
            encodeURIComponent(nameConvidado)
        );

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          if (data[0] === null || data[0] === undefined) {
            //alert("Nome do convidado errado");
            showAlert("Erro", "O nome do convidado esta incorreto!", "error");
          } else {
            setNameConvidado(nameConvidado);
            setAcompanhantes(data[0]);
            setIdConvidado(data[1]);
            setTemAcompanhantes(true);
          }
        } else {
          console.error("Erro ao buscar convidado");
        }
      } catch (error) {
        console.error("Erro ao buscar convidado", error);
      }
    }

    inputRef.current.value = "";
  };

  return (
    <div className="mt-4">
      {alertMessage && (
        <Alert
          key={alertMessage.key}
          title={alertMessage.title}
          message={alertMessage.message}
          type={alertMessage.type}
          onClose={() => setAlertMessage(null)}
        />
      )}
      <SectionTitle text="Confirmação de presença" />
      <p className="font-lora text-gray-600 mt-4">
        Para nos ajudar com o planejamento desse dia tão especial, é muito
        importante que você confirme sua presença e de seus acompanhantes!
      </p>
      <div className="my-3 flex justify-center">
        <div className="w-3/4 h-10 border border-gray-400 bg-ivory outline-none flex items-center px-2">
          <input
            ref={inputRef}
            type="text"
            className="font-lora text-gray-600 bg-transparent w-full outline-none"
          />
          <button onClick={getAcompanhantes}>
            <SendHorizontal size={16} color="#9ca3af" strokeWidth={1} />
          </button>
        </div>
      </div>
    </div>
  );
}
