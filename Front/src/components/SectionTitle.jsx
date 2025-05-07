import FlorClara from "../assets/FlorClara2.png";

export function SectionTitle({ text, id }) {
  return (
    <div className="flex gap-1 items-center" id={id}>
      <img src={FlorClara} alt="" className="h-14" />
      <span className="text-2xl font-bold font-lora text-ManuRoxoTitulo">
        {text}
      </span>
    </div>
  );
}
