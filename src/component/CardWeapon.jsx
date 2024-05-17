import React from "react";
import "./CardWeapon.css";
import ElephKill from "../img/Elephant_Killer-removebg-preview.png";

function CardWeapon(props) {
  console.log(props.weapon.name)
  console.log(props.weapon.statistic.ammo)
  return (
    <div onClick={props.onClick} className="card-weapon">
      <h2 className="card-title text-gradient">{props.weapon.name}</h2>
      <div className="card-stats">
        <h3 className="text-gradient">AMMO</h3>
        <div>{props.weapon.statistic.ammo}</div>
        <h3 className="text-gradient">DAMAGE</h3>
        <div>{props.weapon.statistic.damage}</div>
        <h3 className="text-gradient">CRITIC CHANGE</h3>
        <div>{props.weapon.statistic.critChance}</div>
        <h3 className="text-gradient">RELOAD SPEED</h3>
        <div>{props.weapon.statistic.reloadSpeed}</div>
      </div>
      <div className="line-weapon"></div>
      <div className="card-weapon-image-container">
        <img className="card-weapon-image" src={props.weapon.img} alt="" />
      </div>
    </div>
  );
}

export default CardWeapon;
