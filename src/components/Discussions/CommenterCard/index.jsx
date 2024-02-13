import React from "react";
import "./style.css";
import CommentersCard from "../CommentersCard";

function CommenterCard(){
    return(
        <div className="discussionCommenterCard">
            <div className="commenter-content1">
                <h3 className="commenter-title">Melhores comentaristas da semana</h3>
            </div>
            <div className="commenter-content2">
                <CommentersCard />
                <CommentersCard />
                <CommentersCard />
                <CommentersCard />
                <CommentersCard />
            </div>
        </div>
    )
}

export default CommenterCard;