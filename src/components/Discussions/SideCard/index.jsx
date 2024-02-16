import React, { useEffect, useState } from "react";
import './style.css';
import axios from "axios";
import LogCard from "../LogCard";

function SideCard(){
    
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/last-log/')
        .then(response => {
            setLogs(response.data)
        });
    }, []);

    const image = (imageURL) => {
        const response = "http://127.0.0.1:8000" + imageURL
        return response
    }

    return(
        <div>
            {
                logs && <LogCard
                            key={logs.logID}
                            title={logs.title}
                            subtitle={logs.subTitle}
                            date={logs.date}
                            img={image(logs.image)}
                        />
            }
        </div>
    )
}

export default SideCard;