/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ManuNeve: "#fbfaef",
        ManuRoxo: "#8971a8",
        ManuRoxoFooter: "#a085c3",
        ManuRoxoTitulo: "#8971a8",
        ManuLilasButton: "#d1c9ff",
      },
      fontFamily: {
        lora: ["Lora", "serif"],
      },
    },
  },
  plugins: [],
});
