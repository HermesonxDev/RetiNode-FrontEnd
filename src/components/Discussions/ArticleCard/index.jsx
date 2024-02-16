import React, { useEffect, useState } from "react";
import './style.css';
import ArticlesCard from "../ArticlesCard";
import axios from "axios";

function ArticleCard(){

    const [articles, setArticles] = useState([]);
    const [moreArticles, setMoreArticles] = useState(3)
    
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/trending-articles`, {
            params: {
                _limit: moreArticles
            },
        })
        .then(response => {
            setArticles(response.data)
        });
    }, []);

    return(
        <div className="discussionArticleCard">
            <div className="article-content1">
                <h3 className="article-title">Artigos em alta</h3>
            </div>
            {
                articles.map((article) => {
                    return(
                        <div className="article-content2">
                            <ArticlesCard 
                                key={article.postID}
                                title={article.title}
                                username={article.user_name}
                                reads={article.reads}
                            />
                        </div>
                    )
                })
            }
            <div className="article-content3">
                    <a className="articleButton" onClick={() => setMoreArticles(8)}>Ver todos os artigos em alta</a>
            </div>
        </div>
    )
}

export default ArticleCard;