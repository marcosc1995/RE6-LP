import React from "react";
import "./CardCharacter.css";
import WeaponPill from "./WeaponPill";
import leon from "../img/leon2.webp";
import sherry from "../img/sherry2.webp";
import christ from "../img/christ2.webp";

function CardCharacter() {
  const texto = "Componente tarjeta";
  return (
    <div className="card">
      <h2 className="text-gradient character-name">CHRIST SAMURAI</h2>
      <div className="card-info">
        <div className="requires">
          <h3 className="text-gradient sub-title-card">REQUIRES:</h3>
          <p>Finalizar un escenario con rango A o superior con Leon.</p>
        </div>
        <div className="weapons">
          <h3 className="text-gradient sub-title-card">WEAPONS:</h3>
          <div className="weapon-list">
            <WeaponPill />
            <WeaponPill />
            <WeaponPill />
            <WeaponPill />
          </div>
        </div>
      </div>
      <img className="imgCharacter" src={christ} alt="" />
      <div className="line-name"></div>
    </div>
  );
}

export default CardCharacter;
