import React from "react";
import "./Modal.css";
import CharacterPill from "./CharacterPill";
import ElephKill from "../img/Elephant_Killer-removebg-preview.png";

function Modal(props) {
  console.log(props);
  if (props.open == false) {
    return null;
  }
  return (
    <>
    <div className="overLay"></div>
      <div className="modal-container">
        <button className="btn-close" onClick={props.onClose}>
          x
        </button>
        <h2 className="modal-title text-gradient">{props.content.name}</h2>
        <div className="modal-stats">
          <h2 className="stat-title text-gradient">STATISTIC</h2>
          <div className="stat-item">
            <h3 className="text-gradient">AMMO</h3>
            <div className="stat-item-value">
              {props.content.statistic.ammo}
            </div>
          </div>
          <div className="stat-item">
            <h3 className="text-gradient">DAMAGE</h3>
            <div className="stat-item-value">
              {props.content.statistic.damage}
            </div>
          </div>
          <div className="stat-item">
            <h3 className="text-gradient">CRITIC CHANGE</h3>
            <div className="stat-item-value">
              {props.content.statistic.critChance}
            </div>
          </div>
          <div className="stat-item">
            <h3 className="text-gradient">RELOAD SPEED</h3>
            <div className="stat-item-value">
              {props.content.statistic.reloadSpeed}
            </div>
          </div>
          <div className="stat-item">
            <h3 className="text-gradient">SHOT PER CLIP</h3>
            <div className="stat-item-value">
              {props.content.statistic.shotPerClip}
            </div>
          </div>
          <div className="stat-item">
            <h3 className="text-gradient">FIRING SPEED</h3>
            <div className="stat-item-value">
              {props.content.statistic.firingSpeed}
            </div>
          </div>
          <div className="stat-item">
            <h3 className="text-gradient">ALT FIRE</h3>
            <div className="stat-item-value">
              {props.content.statistic.altFire}
            </div>
          </div>
        </div>
        {/* <div className="modal-line-2"></div>
      <div className="modal-line"></div> */}

        <div className="modal-weapon-image-container">
          <img className="modal-weapon-image" src={props.content.img} alt="" />
        </div>
        {/* <div className="character-pill-list">
        <CharacterPill/>
        <CharacterPill/>
        <CharacterPill/>
      </div> */}
      </div>
    </>
  );
}

export default Modal;
