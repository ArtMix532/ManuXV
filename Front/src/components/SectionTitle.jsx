import FlorClara from "../assets/FlorClara2.png";

export function SectionTitle({ text }) {
  return (
    <div className="flex gap-1 items-center">
      <img src={FlorClara} alt="" className="h-14" />
      <span className="text-2xl font-bold font-lora text-ManuRoxoTitulo">
        {text}
      </span>
    </div>
  );
}
