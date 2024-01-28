import React from "react";
import './style.css';
import UserCard from "../UserCard";

function ChatCard(){
    return(
        <div>
            <div className="discussionChatCard">
                <div className="commentUserCard">
                    <UserCard />
                    <UserCard />
                    <UserCard />
                </div>
            </div>
        </div>
    )
}

export default ChatCard;