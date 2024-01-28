import React from "react";
import MenuBar from "../components/Home/MenuBar";
import TitleCard from "../components/Discussions/TitleCard";
import SideCard from "../components/Discussions/SideCard";
import imageCard from "../assets/img/imageCard.png";
import ChatCard from "../components/Discussions/ChatCard";

function Discussions(){
    return(
        <div>
            <MenuBar />

            <div className="discussionMainContent"  style={{display: "flex"}}>

                <div className="discussionChatContent">
                    <TitleCard />
                    <ChatCard />
                </div>

                <div className="discussionSideContent">
                    <SideCard 
                        title='Changelog'
                        subtitle='cmd + k está agora no RetiNode'
                        date='1 jan, 2023'
                        img={imageCard}
                    />

                    <SideCard 
                        title='Changelog'
                        subtitle='cmd + k está agora no RetiNode'
                        date='1 jan, 2023'
                        img={imageCard}
                    />
                    
                    <SideCard 
                        title='Changelog'
                        subtitle='cmd + k está agora no RetiNode'
                        date='1 jan, 2023'
                        img={imageCard}
                    />
                    
                    <SideCard 
                        title='Changelog'
                        subtitle='cmd + k está agora no RetiNode'
                        date='1 jan, 2023'
                        img={imageCard}
                    />
                </div>
            </div>
            
        </div>
    )
}

export default Discussions;