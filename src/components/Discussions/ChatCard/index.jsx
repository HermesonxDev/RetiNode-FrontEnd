import React from "react";
import './style.css';
import UserCard from "../UserCard";
import imageCard from "../../../assets/img/imageCard.png";

function ChatCard(){
    return(
        <div>
            <div className="discussionChatCard">
                <div className="commentUserCard">
                    <UserCard 
                        name="Thiago Pinheiro dos Santos"
                        linkPost="ThiagoPinheiro.com.br"
                        date="1 jan, 2023"
                        title="Como ser um Desenvolvedor FullStack?"
                        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas eveniet explicabo sint officia modi magnam ea nobis labore fugiat eaque perspiciatis ducimus maxime, doloribus eos! Omnis corrupti animi fugit veniam!"
                        image={imageCard}
                        likes="107"
                        reads="254"
                    />

                    <UserCard 
                        name="Thiago Pinheiro dos Santos"
                        linkPost="ThiagoPinheiro.com.br"
                        date="1 jan, 2023"
                        title="Como ser um Desenvolvedor FullStack?"
                        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas eveniet explicabo sint officia modi magnam ea nobis labore fugiat eaque perspiciatis ducimus maxime, doloribus eos! Omnis corrupti animi fugit veniam!"
                        image={imageCard}
                        likes="107"
                        reads="254"
                    />
                    
                    <UserCard 
                        name="Thiago Pinheiro dos Santos"
                        linkPost="ThiagoPinheiro.com.br"
                        date="1 jan, 2023"
                        title="Como ser um Desenvolvedor FullStack?"
                        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas eveniet explicabo sint officia modi magnam ea nobis labore fugiat eaque perspiciatis ducimus maxime, doloribus eos! Omnis corrupti animi fugit veniam!"
                        image={imageCard}
                        likes="107"
                        reads="254"
                    />
                </div>
            </div>
        </div>
    )
}

export default ChatCard;