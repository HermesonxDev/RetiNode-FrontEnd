import React from "react";
import './style.css';
import { PiWechatLogoDuotone } from "react-icons/pi";

function TitleCard(){
    return(
        <div>
            <div className="discussionTitle">
                <div className="content1">
                    <h1>Discussões</h1>
                    <p>Participe da conversa: Discuta e debata com seus escritores favoritos</p>
                </div>
                <div className="content2">
                    <PiWechatLogoDuotone size={60}/>
                </div>
            </div>
        </div>
    )
}

export default TitleCard;