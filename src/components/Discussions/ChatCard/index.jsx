import React, { useEffect, useState } from "react";
import './style.css';
import UserCard from "../UserCard";
import imageCard from "../../../assets/img/imageCard.png";
import axios from "axios";

function ChatCard(){

    const [cards, setCards] = useState([]);
    
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/discussions/')
        .then(response => {
            setCards(response.data)
        });
    },[]);

    return(
        <div>
            <div className="discussionChatCard">
                {
                    cards.map((card) => {
                        return(
                            <div className="commentUserCard">
                                <UserCard
                                    key={card.postID}
                                    name={card.userName}
                                    linkPost={card.linkPost}
                                    date={card.date}
                                    title={card.title}
                                    description={card.description}
                                    image={imageCard}
                                    likes={card.likes}
                                    reads={card.reads}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ChatCard;