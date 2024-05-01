import React from "react";
import "./Modal.css";
import CharacterPill from "./CharacterPill";
import ElephKill from "../img/Elephant_Killer-removebg-preview.png";

function Modal() {
  return (
    <div className="modal-container">
      <h2 className="modal-title text-gradient">ELEPHANT KILLER</h2>
      <div className="modal-stats">
        <h2 className="stat-title text-gradient">STATISTIC</h2>
        <div className="stat-item">
          <h3 className="text-gradient">AMMO</h3>
          <div className="stat-item-value">000000</div>
        </div>
        <div className="stat-item">
          <h3 className="text-gradient">DAMAGE</h3>
          <div className="stat-item-value">000000</div>
        </div>
        <div className="stat-item">
          <h3 className="text-gradient">CRITIC CHANGE</h3>
          <div className="stat-item-value">000000</div>
        </div>
        <div className="stat-item">
          <h3 className="text-gradient">RELOAD SPEED</h3>
          <div className="stat-item-value">000000</div>
        </div>
        <div className="stat-item">
          <h3 className="text-gradient">RELOAD SPEED</h3>
          <div className="stat-item-value">000000</div>
        </div>
        <div className="stat-item">
          <h3 className="text-gradient">RELOAD SPEED</h3>
          <div className="stat-item-value">000000</div>
        </div>
      </div>
      <div className="modal-line-2"></div>
      <div className="modal-line"></div>

      <div className="modal-weapon-image-container">
        <img className="modal-weapon-image" src={ElephKill} alt="" />
      </div>
      <div className="character-pill-list">
        <CharacterPill/>
        <CharacterPill/>
        <CharacterPill/>
      </div>
    </div>
  );
}

export default Modal;
