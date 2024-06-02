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

const dataWeapons = [
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
    name: "MP-AF",
    img: "https://i.ibb.co/QQHgWpw/MP-AF-removebg-preview.png",
    statistic: {
      ammo: "9MM",
      character: ["Piers", "Ada"],
      altFire: "Automatic fire",
      shotPerClip: 30,
      damage: 100,
      critChance: 6,
      reloadSpeed: "B",
      firingSpeed: "A",
    },
  },
  {
    name: "Sniper Rifle",
    img: "https://i.ibb.co/ckyfYFh/Sniper-Rifle-removebg-preview.png",
    statistic: {
      ammo: "7.62MM AMMO",
      character: ["Jake", "Sherry", "Ada"],
      altFire: "None",
      shotPerClip: 6,
      damage: 700,
      critChance: 100,
      reloadSpeed: "C",
      firingSpeed: "C-",
    },
  },
  {
    name: "Hydra",
    img: "https://i.ibb.co/Gksdhfv/Hydra-removebg-preview.png",
    statistic: {
      ammo: "10-GAUGE SHELLS",
      character: ["Helena"],
      altFire: "none",
      shotPerClip: 3,
      damage: 120,
      critChance: 0,
      reloadSpeed: "C",
      firingSpeed: "S",
    },
  },

  {
    name: "Wing Shooter",
    img: "https://i.ibb.co/JqGLR0Z/Wing-Shooter-removebg-preview.png",
    statistic: {
      ammo: "9MM",
      character: ["Leon"],
      altFire: "Dual-Wield",
      shotPerClip: "18 / 36",
      damage: 120,
      critChance: "8",
      reloadSpeed: "A",
      firingSpeed: "A",
    },
  },
  {
    name: "Triple Shot",
    img: "https://i.ibb.co/BZtTgbZ/Triple-Shot-removebg-preview.png",
    statistic: {
      ammo: "9MM",
      character: ["Sherry"],
      altFire: "3-shot burst",
      shotPerClip: "20",
      damage: 130,
      critChance: "8",
      reloadSpeed: "A",
      firingSpeed: "S",
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
];
const dataCharacter = [
  {
    name: "LEON",
    // weapons: ["Elephant Killer", "Nine 9 nine", "Rocket Luncher"],
    requires: "Available from start.",
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
    name: "SHERRY",
    // weapons: ["Elephant Killer", "Nine 9 nine", "Rocket Luncher"],
    requires: "Finish the Underworld map with any character with Rank B or higher.",
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
    img: "https://i.ibb.co/Hhk5KcD/sherry-2.webp",
  },
  {
    name: "PIERS",
    // weapons: ["Elephant Killer", "Nine 9 nine", "Rocket Luncher"],
    requires: "Finish the Metal Skeleton map with any character with Rank B or higher.",
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
    img: "https://i.ibb.co/1rLf56H/Piers-1.webp",
  },
  {
    name: "CHRIS SAMURAI",
    requires: "Available from start.",
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
    img: "https://i.ibb.co/cYPML1v/christ-3.webp",
  },
  {
    name: "JAKE",
    requires: "Available from start.",
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
    img: "https://i.ibb.co/HGzMDV8/jake-3.webp",
  },
  {
    name: "HELENA",
    requires: "Finish the Urban Chaos map with any character with Rank B or higher.",
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
    img: "https://i.ibb.co/02Zm4Mc/helena-2.webp",
  },
  {
    name: "ADA",
    requires: "End Ada's campaign.",
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
  const [data, setData] = useState(dataWeapons);
  // const getData = () => {
  //   fetch("data.json", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       const datas = res.dataWeapons;
  //       setData(datas);
  //       console.log(data);
  //     });
  //   //  .then(console.log(data))
  //   // .then(function (response) {
  //   //   console.log(response);
  //   //   setData()
  //   //   // return response.json();
  //   // })
  //   // .then(function (myJson) {
  //   //   console.log(myJson);
  //   //   // setData(myJson)
  //   // });
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

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
          In Resident Evil 6 you can obtain various extras if you meet certain
          requirements.
        </p>
        <p>
          Many of these extras are for Mercenaries mode, a mode that is unlocked
          when you complete a character's campaign for the first time.
        </p>
      </div>

      <div className="character-list">
        {characters.map((char) => {
          return <CardCharacter character={char} key={uuid4()} />;
        })}
      </div>
      <div>
        <h2 className="text-gradient section-title">WEAPONS</h2>
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
      <div className="tablePts">
        <h2 className="text-gradient">RANK POINTS</h2>
        {/* <div className="line-pts"></div> */}
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
    </>
  );
}

export default App;
