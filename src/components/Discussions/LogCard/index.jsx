import React from "react";
import './style.css';

function LogCard(props){
    return(
        <div className="discussionSideCard">

            <div className="log-content1">
                <h3 className="sideCardTitle">{props.title}</h3>
                {
                    props.img && (
                        <img src={props.img} alt={props.imageAlt} className="imageSideCard"/>
                    )
                }
            </div>

            <div className="log-content2">
                <h3 className="sideCardSubTitle">{props.subtitle}</h3>
            </div>

            <div className="log-content3">
                <p className="sideCardDate">{props.date}  -  </p>
                <p className="sideCardNewText">New</p>
            </div>

            <div className="log-content4">
                <a className="logsButton">Ver todas as mudanças</a>
            </div>
        </div>
    )
}

export default LogCard;