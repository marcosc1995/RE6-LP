import React from "react";
import "./CharacterPill.css";
import elephKill from "../img/Elephant_Killer-removebg-preview.png";
import leon from "../img/leon2.webp";

function CharacterPill() {
  return (
    <div className="character-pill-image-container">
      <img className="character-pill-image" src={leon} alt="" />
    </div>
  );
}

export default CharacterPill;
