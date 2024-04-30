import React from "react";
import "./CardWeapon.css";
import ElephKill from "../img/Elephant_Killer-removebg-preview.png";

function CardWeapon() {
  return (
    <div className="card-weapon">
      <h2 className="card-title text-gradient">ELEPHANT KILLER</h2>
      <div className="card-stats">
        <h3 className="text-gradient">AMMO</h3>
        <div>000000</div>
        <h3 className="text-gradient">DAMAGE</h3>
        <div>000000</div>
        <h3 className="text-gradient">CRITIC CHANGE</h3>
        <div>000000</div>
        <h3 className="text-gradient">RELOAD SPEED</h3>
        <div>000000</div>
      </div>
      <div className="line-weapon"></div>
      <div className="card-weapon-image-container">
        <img className="card-weapon-image" src={ElephKill} alt="" />
      </div>
    </div>
  );
}

export default CardWeapon;
