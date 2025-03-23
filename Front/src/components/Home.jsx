import { AboutMe } from "./AboutMe";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Location } from "./Location";

function Home() {
  return (
    <div className="bg-ManuNeve w-full ">
      <Header />
      <div className="mx-4">
        <Hero />
        <AboutMe />
        <Location />
      </div>

    </div>
  );
}

export default Home;
