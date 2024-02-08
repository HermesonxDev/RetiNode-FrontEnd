import React, { useEffect, useState } from "react";
import './style.css';
import axios from "axios";
import LogCard from "../LogCard";
import imageCard from "../../../assets/img/imageCard.png";

function SideCard(){
    
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/lastLog/')
        .then(response => {
            setLogs(response.data)
        });
    }, []);

    console.log(logs);

    return(
        <div>
            {
                logs && <LogCard
                            key={logs.logID}
                            title={logs.title}
                            subtitle={logs.subTitle}
                            date={logs.date}
                            img={imageCard}
                        />
            }
        </div>
    )
}

export default SideCard;