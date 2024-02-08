import React from "react";
import './style.css';
import ArticlesCard from "../ArticlesCard";

function ArticleCard(){
    return(
        <div className="discussionArticleCard">
            <div className="article-content1">
                <h3 className="article-title">Artigos em alta</h3>
            </div>
            <div className="article-content2">
                <ArticlesCard />
                <ArticlesCard />
                <ArticlesCard />
            </div>
            <div className="article-content3">
                <a href="" className="articleButton">Ver todos os artigos em alta</a>
            </div>
        </div>
    )
}

export default ArticleCard;