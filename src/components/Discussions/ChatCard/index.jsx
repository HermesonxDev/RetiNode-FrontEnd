import React, { useEffect, useState } from "react";
import './style.css';
import UserCard from "../UserCard";
import axios from "axios";

function ChatCard(){

    const [cards, setCards] = useState([]);
    
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/discussions/')
        .then(response => {
            setCards(response.data)
        });
    },[]);

    const image = (imageURL) => {
        const response = "http://127.0.0.1:8000" + imageURL
        return response;
    }

    return(
        <div className="discussionChatCard">
            {
                cards.map((card) => {
                    return(
                        <div className="commentUserCard">
                            <UserCard
                                key={card.postID}
                                name={card.user_name}
                                linkPost={card.linkPost}
                                date={card.date}
                                title={card.title}
                                description={card.description}
                                imagePost={image(card.image)}
                                likes={card.likes}
                                reads={card.reads}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ChatCard;