import { Radio } from "@material-tailwind/react";

export function RadioCustomIcon({ presenca, setPresenca }) {
  return (
    <div className="flex flex-col md:flex md:flex-col md:px-72">
      <Radio
        name="type"
        label="Sim"
        value="true"
        checked={presenca === "true"}
        onChange={(e) => setPresenca(e.target.value)}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        }
      />
      <Radio
        name="type"
        label="Não"
        value="false"
        checked={presenca === "false"}
        onChange={(e) => setPresenca(e.target.value)}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        }
        defaultChecked
      />
    </div>
  );
}
