import React from "react";
import './style.css';
import Card from "../Card";
import { FcStatistics } from "react-icons/fc"

function Footer(){
    return(
        <div>
            <h2 className="titleTopics"><FcStatistics />Tópicos do momento</h2>
            <div className="footerMenu">
                <div className="footerContent1">
                    <Card
                        user="Thiago Pinheiro dos Santos"
                        title="Modelos atuais vs Modelos antigos de cabeçotes e seus respectivos motores"
                        date="05/jan/2024"
                        readingTime="9"
                        comments="286"
                    />

                    <Card 
                        user="Jonathan Pinheiro"
                        title="Até onde se pode pleinar um cabeçote"
                        date="10/jan/2024"
                        readingTime="11"
                        comments="198"
                    />

                    <Card 
                        user="Jonas Pinheiro"
                        title="Como gerenciar sua retífica de forma eficiente"
                        date="11/jan/2024"
                        readingTime="20"
                        comments="300"
                    />
                </div>

                <div className="footerContent2">
                    <Card
                        user="Thiago Pinheiro dos Santos"
                        title="Melhores motores já fabricados"
                        date="07/jan/2024"
                        readingTime="10"
                        comments="201"
                    />

                    <Card 
                        user="Jonathan Pinheiro"
                        title="Restauração completa de motor, do básico ao avançado"
                        date="01/jan/2024"
                        readingTime="31"
                        comments="299"
                    />

                    <Card 
                        user="Jonas Pinheiro"
                        title="Retífica ao longo dos anos, como acompanhar o mercado e a evolução dos automovéis"
                        date="16/jan/2024"
                        readingTime="21"
                        comments="245"
                    />
                </div>
            </div>
        </div>
    )
}

export default Footer;