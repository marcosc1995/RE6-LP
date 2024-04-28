import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import umbrella from "./img/Umbrella.png";
import RE6 from "./img/RE6-logo-M.png";
import CardCharacter from "./component/CardCharacter";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <img className="bg-img" src={umbrella} alt="" />
      <div className="intro">
        <img className="residentEvil6-logo" src={RE6} alt="" />
        <h1 className="text-gradient roboto-serif title">RESIDENT EVIL</h1>
        <h2 className="text-gradient sub-title">
          MERCENARIES GUIDE AND WEAPONS STATISTICS
        </h2>
      </div>
      <div className="presentation">
        <h2 className="text-gradient">UNLOCKABLE</h2>
        <p>
          En Resident Evil 6 podrás obtener diversos extras si cumples
          determinados requisitos.
        </p>
        <p>
          Muchos de estos extras son para el modo Mercenarios, modo que se
          desbloquea cuando te pasas por primera vez una campaña de un
          personaje.
        </p>
      </div>
      {/* <div className="container text-gradient">Las tarjetas de personajes</div> */}
      <div className="character-list">
      <CardCharacter/>
      <CardCharacter/>
      <CardCharacter/>
      <CardCharacter/>
      </div>
      
    </>
  );
}

export default App;
