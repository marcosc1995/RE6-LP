import { useState, useEffect } from "react";
import { v4 as uuid4 } from "uuid";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import umbrella from "./img/Umbrella.png";
import RE6 from "./img/RE6-logo-M.png";
import CardCharacter from "./component/CardCharacter";
import CardWeapon from "./component/CardWeapon";
import Modal from "./component/Modal";
import "./App.css";

// const dataWeapons = [
//   {
//     name: "Elephant Killer",
//     img: "https://i.ibb.co/0cZcCqP/Elephant-Killer-removebg-preview.png",
//     statistic: {
//       ammo: ".500 Magnum",
//       character: ["Jake", "Sherry"],
//       altFire: "none",
//       shotPerClip: 5,
//       damage: 1.6,
//       critChance: 12.5,
//       reloadSpeed: "C",
//       firingSpeed: "C",
//     },
//   },
//   {
//     name: "Nine 9 nine",
//     img: "https://i.ibb.co/BtNMt1S/nine-oh-nine-removebg-preview.png",
//     statistic: {
//       ammo: "9MM",
//       character: ["Jake", "Christ", "Agent"],
//       altFire: "none",
//       shotPerClip: 15,
//       damage: 150,
//       critChance: 12.5,
//       reloadSpeed: "A",
//       firingSpeed: "A",
//     },
//   },
//   {
//     name: "Rocket Luncher",
//     img: "https://i.ibb.co/V3ZbG5B/Rocket-Launcher-removebg-preview.png",
//     statistic: {
//       ammo: "One shot per launcher",
//       character: ["Leon", "Chris"],
//       altFire: "none",
//       shotPerClip: "none",
//       damage: 30000,
//       critChance: "none",
//       reloadSpeed: "none",
//       firingSpeed: "none",
//     },
//   },
// ];
const dataCharacter = [
  {
    name: "LEON",
    // weapons: ["Elephant Killer", "Nine 9 nine", "Rocket Luncher"],
    requires: "Disponible de inicio.",
    weapons: [
      {
        name: "Elephant Killer",
        img: "https://i.ibb.co/0cZcCqP/Elephant-Killer-removebg-preview.png",
        statistic: {
          ammo: ".500 Magnum",
          character: ["Jake", "Sherry"],
          altFire: "none",
          shotPerClip: 5,
          damage: 1.6,
          critChance: 12.5,
          reloadSpeed: "C",
          firingSpeed: "C",
        },
      },
      {
        name: "Nine 9 nine",
        img: "https://i.ibb.co/BtNMt1S/nine-oh-nine-removebg-preview.png",
        statistic: {
          ammo: "9MM",
          character: ["Jake", "Christ", "Agent"],
          altFire: "none",
          shotPerClip: 15,
          damage: 150,
          critChance: 12.5,
          reloadSpeed: "A",
          firingSpeed: "A",
        },
      },
      {
        name: "Rocket Luncher",
        img: "https://i.ibb.co/V3ZbG5B/Rocket-Launcher-removebg-preview.png",
        statistic: {
          ammo: "One shot per launcher",
          character: ["Leon", "Chris"],
          altFire: "none",
          shotPerClip: "none",
          damage: 30000,
          critChance: "none",
          reloadSpeed: "none",
          firingSpeed: "none",
        },
      },
    ],
    img: "https://i.ibb.co/cTgHwHt/leon-2.webp",
  },
  {
    name: "CHRIST",
    requires: "Disponible de inicio.",
    weapons: [
      {
        name: "Elephant Killer",
        img: "https://i.ibb.co/0cZcCqP/Elephant-Killer-removebg-preview.png",
      },
      {
        name: "Nine 9 nine",
        img: "https://i.ibb.co/BtNMt1S/nine-oh-nine-removebg-preview.png",
      },
      {
        name: "Rocket Luncher",
        img: "https://i.ibb.co/V3ZbG5B/Rocket-Launcher-removebg-preview.png",
      },
    ],
    img: "https://i.ibb.co/6PTSQQ0/christ-1.png",
  },
  {
    name: "ADA",
    requires: "Finalizar la campaña de Ada.",
    weapons: [
      {
        name: "Elephant Killer",
        img: "https://i.ibb.co/0cZcCqP/Elephant-Killer-removebg-preview.png",
      },
      {
        name: "Nine 9 nine",
        img: "https://i.ibb.co/BtNMt1S/nine-oh-nine-removebg-preview.png",
      },
      {
        name: "Rocket Luncher",
        img: "https://i.ibb.co/V3ZbG5B/Rocket-Launcher-removebg-preview.png",
      },
    ],
    img: "https://i.ibb.co/NYRbXz5/ada-1.webp",
  },
];

function App() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const datas = res.dataWeapons;
        setData(datas);
        console.log(data);
      });
    //  .then(console.log(data))
    // .then(function (response) {
    //   console.log(response);
    //   setData()
    //   // return response.json();
    // })
    // .then(function (myJson) {
    //   console.log(myJson);
    //   // setData(myJson)
    // });
  };
  useEffect(() => {
    getData();
  }, []);

  const [count, setCount] = useState(0);
  const [characters, setCharacters] = useState(dataCharacter);
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

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
      <div className="tablePts">
        <h2 className="text-gradient">Puntos</h2>
        <table>
          <tr>
            <th className="text-gradient">Rank</th>
            <th className="text-gradient">Solo</th>
            <th className="text-gradient">Duo</th>
          </tr>
          <tr>
            <td>E</td>
            <td>0 - 39,999</td>
            <td>0 - 59,999</td>
          </tr>
          <tr>
            <td>D</td>
            <td>40,000 - 59,999</td>
            <td>60,000 - 89,999</td>
          </tr>
          <tr>
            <td>C</td>
            <td>60,000 - 79,999</td>
            <td>90,000 - 119,999</td>
          </tr>
          <tr>
            <td>B</td>
            <td>80,000 - 99,999</td>
            <td>120,000 - 179,999</td>
          </tr>
          <tr>
            <td>A</td>
            <td>100,000 - 139,999</td>
            <td>180,000 - 219,999</td>
          </tr>
          <tr>
            <td>S</td>
            <td>140,000+</td>
            <td>220,000+</td>
          </tr>
        </table>
      </div>
      <div className="character-list">
        {characters.map((char) => {
          return <CardCharacter character={char} key={uuid4()} />;
        })}
      </div>
      <div>
        <h2 className="text-gradient">WEAPONS</h2>
        <div className="weapon-container">
          {data.map((weapon) => {
            return (
              <CardWeapon
                onClick={() => {
                  setIsOpen(true), setModalContent(weapon);
                }}
                weapon={weapon}
                key={uuid4()}
              />
            );
          })}
        </div>
      </div>
      <div>
        {/* <h2 className="text-gradient">MODAL</h2> */}
        <Modal
          content={modalContent}
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        />
      </div>
    </>
  );
}

export default App;
