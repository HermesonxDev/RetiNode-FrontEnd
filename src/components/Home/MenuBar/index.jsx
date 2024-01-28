import React from "react";
import "./style.css";

function MenuBar(){
    return(
        <div>
            <header>
                <nav className="menu">
                    <ul className="nav-list">
                        <li><a href="/">Home</a></li>
                        <li><a href="/Feed">Meu feed</a></li>
                        <li><a href="/Discussions">Discussões</a></li>
                        <li><a href="/Write">Escreva</a></li>
                        <li><a href="/More">Mais</a></li>
                        <li><a href="/SignIn">Entrar</a></li>
                        <li><a href="SignUp">Criar conta</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default MenuBar;