import React, { useState } from "react";
import "./style.css";
import DropDownMenu from "../Home/DropDownMenu";


function MenuBar(){

    const [openMore, setOpenMore] = useState(false);

    return(
        <div>
            <header>
                <nav className="menu">
                    <ul className="nav-list">
                        <li><a href="/">Home</a></li>
                        <li><a href="discussions">Discussões</a></li>
                        <li><a href="write">Escreva</a></li>
                        <li><a href="signIn">Entrar</a></li>
                        <li><a href="signUp">Criar conta</a></li>
                        <li><a onClick={() => setOpenMore((prev) => !prev)}>Mais</a></li>
                    </ul>
                </nav>
            </header>
            {
                openMore && <DropDownMenu />
            }
        </div>
    )
}

export default MenuBar;