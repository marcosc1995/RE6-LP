import React from "react";
import './WeaponPill.css'
import elephKill from '../img/Elephant_Killer-removebg-preview.png'

function WeaponPill() {
    return(
        <div className="container-image">
            <img className="weapon-image" src={elephKill} alt="" />
        </div>
    )
}

export default WeaponPill