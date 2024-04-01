import React from "react";
import "./style.css";

function Banner(){
    return(
        <div>
            <div className="banner">
                <div className="titleBanner">
                    <h1>Torre Forte Retífica</h1>
                    <h5>-= Referência em Fortaleza =-</h5>
                </div>
                <a href="/SignIn" className="button">SAIBA MAIS</a>
            </div>
        </div>
    )
}

export default Banner;