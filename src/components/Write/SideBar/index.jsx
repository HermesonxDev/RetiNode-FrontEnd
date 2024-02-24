import React, { useState } from "react";
import './style.css';
import userPhoto from "../../../assets/img/user.jpg"
import { TfiWrite } from "react-icons/tfi";
import { FaPencilAlt } from "react-icons/fa";
import { MdPublishedWithChanges } from "react-icons/md";
import { IoArrowBackOutline } from "react-icons/io5";
import Publisheds from "../Publisheds";
import Drafts from "../Drafts";

function SideBar(){

    const [publishedsOn, setPublishedsOn] = useState(true);
    const [draftsOn, setDraftsOn] = useState(true);

    return(
        <div className="writeSideBar">
            <div className="sideBar-header">
                <div className="sideBar-profile">
                    <img src={userPhoto} alt="User photo" className="sideBar-imageProfile" />
                    <a href="" className="sideBar-name">Meu perfil</a>
                </div>
                <button className="sideBar-newdraft"><FaPencilAlt /> Novo Rascunho</button>
                <button className="sideBar-drafts" onClick={() => setDraftsOn((prev) => !prev)}><TfiWrite /> Rascunhos</button>
                {draftsOn && <Drafts />}
            </div>

            <div className="sideBar-body">
                <button className="publisheds" onClick={() => setPublishedsOn((prev) => !prev)}><MdPublishedWithChanges size={18}/> Publicados</button>
                {publishedsOn && <Publisheds />}
            </div>
            
            <div className="sideBar-footer">
                <a href="/" className="back-button"><IoArrowBackOutline className="return-icon"/> Voltar ao RetiNode</a>
            </div>
        </div>
    )
}

export default SideBar;