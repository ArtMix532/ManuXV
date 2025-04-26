import { AboutMe } from "./AboutMe";
import { Confirmation } from "./Confirmation";
import { ConfirmationGuests } from "./ConfirmationGuests";
import { Footer } from "./Footer";
import { Gifts } from "./Gifts";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Location } from "./Location";
import { Suggestions } from "./Suggestions";
import { useState } from "react";

function Home() {
  const [acompanhantes, setAcompanhantes] = useState([]);
  const [temAcompanhantes, setTemAcompanhantes] = useState(false);
  const [nameConvidado, setNameConvidado] = useState("");
  const [idConvidado, setIdConvidado] = useState([]);

  return (
    <div className="bg-ManuNeve w-full">
      <Header />
      <div className="mx-4 md:px-10">
        <Hero />
        <AboutMe />
        <Location />
      </div>
      <div className="bg-ManuRoxo">
        <Gifts />
      </div>
      <Suggestions />
      <div className="mx-4">
        <Confirmation
          setAcompanhantes={setAcompanhantes}
          setTemAcompanhantes={setTemAcompanhantes}
          setNameConvidado={setNameConvidado}
          setIdConvidado={setIdConvidado}
        />
        <ConfirmationGuests
          nameConvidado={nameConvidado}
          temAcompanhantes={temAcompanhantes}
          acompanhantes={acompanhantes}
          setTemAcompanhantes={setTemAcompanhantes}
          idConvidado={idConvidado}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
