import React from "react";
import './style.css';

function ArticlesCard(props){
    return(
        <div className="discussionArticlesCard">
            <div className="articles-content1">
                <a href="" className="link-matter">
                    <h4>{props.title}</h4>
                </a>
            </div>
            <div className="articles-content2">
                <a href="" className="link-profile">
                    <h5>{props.username} / {props.reads} leituras</h5>
                </a>
            </div>
        </div>
    )
}

export default ArticlesCard;