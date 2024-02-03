import React, { useEffect, useState } from "react";
import MenuBar from "../components/Home/MenuBar";
import TitleCard from "../components/Discussions/TitleCard";
import SideCard from "../components/Discussions/SideCard";
import imageCard from "../assets/img/imageCard.png";
import ChatCard from "../components/Discussions/ChatCard";
import axios from "axios";

function Discussions(){

    const [logs, setLogs] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/logs/')
        .then(response => {
            setLogs(response.data)
        });
    }, []);

    return(
        <div>
            <MenuBar />
            <div className="discussionMainContent"  style={{display: "flex"}}>

                <div className="discussionChatContent">
                    <TitleCard />
                    <ChatCard />
                </div>

                <div className="discussionSideContent">
                    {
                        logs.map((log) => {
                            return(
                                <SideCard 
                                    title={log.title}
                                    subtitle={log.subTitle}
                                    date={log.date}
                                    img={imageCard}
                                />
                            )
                        })
                    }
                </div>
            </div>
            
        </div>
    )
}

export default Discussions;