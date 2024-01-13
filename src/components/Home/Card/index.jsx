import React from "react";
import { FaRegComment } from "react-icons/fa6";
import UserPhoto from '../../../assets/img/user.jpg';
import './style.css';

function Card(props){
    return(
        <div>
            <div className="card">
                <div className="cardUser">
                    <img src={UserPhoto} alt="User Photo" className="userPhoto"/>
                    <h4 className="userName">{props.user}</h4>
                </div>
                <div className="cardTitle">
                    <h2>{props.title}</h2>
                </div>
                <div className="cardInfo">
                    <p className="date">{props.date}</p>
                    <p className="readingTime">{props.readingTime} min read</p>
                    <p className="comments"><FaRegComment /> {props.comments} comments</p>
                </div>
            </div>
        </div>
    )
}

export default Card;