import React from "react";
import "./style.css";
import UserPhoto from "../../../assets/img/user.jpg";
import { SlUserFollow } from "react-icons/sl";

function CommentersCard(props){
    return(
        <div className="discussionCommentersCard">
            <div className="commenters-content1">
                {
                    props.img
                    ?
                    <img src={props.img} alt="User photo" className="commenters-image" />
                    :
                    <img src={UserPhoto} alt="User photo" className="commenters-image imageBorder" />
                }
                <p className="commenters-name">{props.name}</p>
            </div>
            <div className="commenters-content2">
                <button className="followButton"><SlUserFollow size={15}/></button>
            </div>
        </div>
    )
}

export default CommentersCard;