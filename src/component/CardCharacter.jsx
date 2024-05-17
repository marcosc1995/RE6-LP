import React from "react";
import { v4 as uuid4} from 'uuid'
import { useState } from "react";
import "./CardCharacter.css";
import WeaponPill from "./WeaponPill";
import leon from "../img/leon2.webp";
import sherry from "../img/sherry2.webp";
import christ from "../img/christ2.webp";

function CardCharacter(props) {
  // const [weapons, setWeapons] = useState([1,2])
  const character = props.character
  const weapons = character.weapons
  // console.log(weapons)
  const texto = "Componente tarjeta";
  return (
    <div className="card">
      <h2 className="text-gradient character-name">{character.name}</h2>
      <div className="card-info">
        <div className="requires">
          <h3 className="text-gradient sub-title-card">REQUIRES:</h3>
          <p>{character.requires}</p>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cumque
            ducimus expedita illum earum odio incidunt ipsum non consequatur
            voluptatibus eligendi obcaecati officia eaque recusandae, delectus
            modi itaque nostrum illo.
          </p> */}
        </div>
        <div className="weapons">
          <h3 className="text-gradient sub-title-card">WEAPONS:</h3>
          <div className="weapon-list">
            {weapons.map((weap)=> {
              // console.log(weap)
              return <WeaponPill weapon={weap} key={uuid4()} />
            })}
          </div>
        </div>
      </div>
      <img className="imgCharacter" src={character.img} alt="" />
      <div className="line-name"></div>
      {/* <a href="https://imgbb.com/">
        <img src="https://i.ibb.co/NYRbXz5/ada-1.webp" alt="ada-1" border="0" />
      </a> */}
    </div>
  );
}

export default CardCharacter;
