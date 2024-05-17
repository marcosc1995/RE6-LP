import React from "react";
import './WeaponPill.css'
import elephKill from '../img/Elephant_Killer-removebg-preview.png'

function WeaponPill(props) {
    const weaponImage = props.weapon.img
    // console.log(weapon)
    return(
        <div className="container-image">
            <img className="weapon-image" src={weaponImage} alt="" />
        </div>
    )
}

export default WeaponPill