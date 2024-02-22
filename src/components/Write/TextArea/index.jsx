import React, { useState } from "react";
import './style.css';
import { IoMdMore } from "react-icons/io";
import Icon from "../../../assets/img/icon.png";
import DecoratorsBar from "../DecoratorsBar";
import { GoSidebarExpand, GoSidebarCollapse } from "react-icons/go";
import SideBar from "../SideBar";

function TextArea(){

    const [decoratorsOn, setDecoratorsOn] = useState(true);
    const [sideBarOn, setSideBarOn] = useState(false)

    return(
        <div className="writeTextArea">
            <div className="form-header">
                <div className="header-title">
                    <a href="/">
                        <img className="header-icon" src={Icon} alt="Ícone" />
                    </a>
                    <h3 className="header-title-content">Crie seu Post</h3>
                </div>

                <div className="header-buttons">
                    <button className="header-btn edit">Editar</button>
                    <button className="header-btn preview">Preview</button>
                </div>
            </div>

            <div className="form-body">
                <form className="form">
                    <div className="header">
                        { sideBarOn
                            ?
                            <a className="sideBar-expand" onClick={() => setSideBarOn((prev) => !prev)}><GoSidebarExpand size={23}/></a>
                            :
                            <a className="sideBar-expand" onClick={() => setSideBarOn((prev) => !prev)}><GoSidebarCollapse size={23}/></a>
                        }
                        <button className="form-cover-image">Adicionar imagem</button>
                        <input type="text" className="form-post-title" placeholder="Adicione o título do seu post aqui!"/>
                        <input type="text" className="form-post-tags" placeholder="Adicione até 4 tags"/>
                    </div>

                    <div className="decorators">
                        <div className="decorators-content">
                            <a onClick={() => setDecoratorsOn((prev) => !prev)}><IoMdMore size={28}/></a>
                            { decoratorsOn && <DecoratorsBar />}
                        </div>
                    </div>

                    <div className="main">
                        <textarea className="form-post-text" placeholder="Escreva o conteúdo do seu post aqui!"></textarea>
                    </div>

                    <div className="footer">
                        <button className="footer-btn publish">Publicar</button>
                        <button className="footer-btn save">Salvar rascunho</button>
                    </div>
                </form>
            </div>

            { sideBarOn && <SideBar />}
        </div>
    )
}

export default TextArea;