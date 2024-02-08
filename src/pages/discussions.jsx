import React from "react";
import MenuBar from "../components/Home/MenuBar";
import TitleCard from "../components/Discussions/TitleCard";
import SideCard from "../components/Discussions/SideCard";
import ChatCard from "../components/Discussions/ChatCard";
import ArticleCard from "../components/Discussions/ArticleCard";

function Discussions(){

    return(
        <div>
            <MenuBar />
            <div className="discussionMainContent"  style={{display: "flex"}}>

                <div className="discussionChatContent">
                    <TitleCard />
                    <ChatCard />
                </div>

                <div className="discussionSideContent" style={{display: "flex", flexDirection: "column"}}>
                    <SideCard />
                    <ArticleCard />
                </div>
            </div>
            
        </div>
    )
}

export default Discussions;