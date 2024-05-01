import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import umbrella from "./img/Umbrella.png";
import RE6 from "./img/RE6-logo-M.png";
import CardCharacter from "./component/CardCharacter";
import CardWeapon from "./component/CardWeapon";
import Modal from "./component/Modal";
import "./App.css";

const data = [
  {
    name: "Leon",
    weapons: ["Elephant Killer", "Nine 9 nine", "Rocket Luncher"],
    img: "https://i.ibb.co/cTgHwHt/leon-2.webp",
  },
  {
    name: "Christ",
    weapons: ["Elephant Killer", "Nine 9 nine", "Rocket Luncher"],
    img: "https://i.ibb.co/6PTSQQ0/christ-1.png",
  },
  {
    name: "Ada",
    weapons: ["Elephant Killer", "Nine 9 nine", "Rocket Luncher"],
    img: "https://i.ibb.co/NYRbXz5/ada-1.webp",
  },
];

function App() {
  const [count, setCount] = useState(0);
  const [characters, setCharacters] = useState(data);

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
      <div className="character-list">
        {characters.map((char) => {
          return <CardCharacter character={char} />;
        })}
      </div>
      <div>
        <h2 className="text-gradient">WEAPONS</h2>
        <div className="weapon-container">
          <CardWeapon />
          <CardWeapon />
          <CardWeapon />
          <CardWeapon />
          <CardWeapon />
        </div>
      </div>
      <div>
        <h2 className="text-gradient">MODAL</h2>
        <Modal />
      </div>
    </>
  );
}

export default App;
