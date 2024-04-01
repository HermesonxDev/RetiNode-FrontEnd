import React from "react";
import TitleCard from "../components/Discussions/TitleCard";
import SideCard from "../components/Discussions/SideCard";
import ChatCard from "../components/Discussions/ChatCard";
import ArticleCard from "../components/Discussions/ArticleCard";
import CommenterCard from "../components/Discussions/CommenterCard";

function Discussions(){

    return(
        <div>
            <div className="discussionMainContent"  style={{display: "flex"}}>

                <div className="discussionChatContent">
                    <TitleCard />
                    <ChatCard />
                </div>

                <div className="discussionSideContent" style={{display: "flex", flexDirection: "column"}}>
                    <SideCard />
                    <ArticleCard />
                    <CommenterCard />
                </div>
            </div>
            
        </div>
    )
}

export default Discussions;