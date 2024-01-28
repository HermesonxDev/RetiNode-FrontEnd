import React, { useState } from "react";
import "./style.css";
import DropDownMenu from "../../DropDownMenu";

function MenuBar(){

    const [openMore, setOpenMore] = useState(false);

    return(
        <div>
            <header>
                <nav className="menu">
                    <ul className="nav-list">
                        <li><a href="/">Home</a></li>
                        <li><a href="/Discussions">Discussões</a></li>
                        <li><a href="/Write">Escreva</a></li>
                        <li><a href="/SignIn">Entrar</a></li>
                        <li><a href="SignUp">Criar conta</a></li>
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