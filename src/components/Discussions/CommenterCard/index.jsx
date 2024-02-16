import React, { useEffect, useState } from "react";
import "./style.css";
import CommentersCard from "../CommentersCard";
import axios from "axios";

function CommenterCard(){

    const [commenters, setCommenters] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/commentators-of-the-week/')
        .then(response => {
            setCommenters(response.data)
        });
    }, []);

    return(
        <div className="discussionCommenterCard">
            <div className="commenter-content1">
                <h3 className="commenter-title">Melhores comentaristas da semana</h3>
            </div>
            {
                commenters.map((commenter) => {
                    return(
                        <div className="commenter-content2">
                            <CommentersCard
                                key={commenter.commentID}
                                name={commenter.user_name}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CommenterCard;