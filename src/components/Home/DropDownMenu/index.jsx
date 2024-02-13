import React from "react";
import './style.css';
import { FaBook } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaInfoCircle } from "react-icons/fa";

function DropDownMenu(){
    return(
        <div>
            <div className="dropDown">
                <ul className="subMenu">
                    <li><a href=""><FaBook /> Suporte</a></li>
                    <li><a href=""><BsFillTelephoneFill /> Contato</a></li>
                    <li><a href=""><FaInfoCircle /> Sobre</a></li>
                </ul>
            </div>
        </div>
    )
}

export default DropDownMenu;