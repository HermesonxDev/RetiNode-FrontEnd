import React from "react";
import './style.css';

function SideCard(props){
    return(
        <div>
            <div className="discussionSideCard">
                <div className="content1">
                    <h3 className="sideCardTitle">{props.title}</h3>
                    {
                        props.img && (
                            <img src={props.img} alt={props.imageAlt} className="imageSideCard"/>
                        )
                    }
                </div>
                <div className="content2">
                    <h3 className="sideCardSubTitle">{props.subtitle}</h3>
                </div>
                <div className="content3">
                    <p className="sideCardDate">{props.date}  -  </p>
                    <p className="sideCardNewText">New</p>
                </div>
            </div>
        </div>
    )
}

export default SideCard;