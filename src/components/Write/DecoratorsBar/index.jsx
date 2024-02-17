import React from "react";
import './style.css';
import { ImBold, ImQuotesLeft } from "react-icons/im";
import { FaItalic } from "react-icons/fa";
import { RiListOrdered, RiListUnordered } from "react-icons/ri";


function DecoratorsBar(){
    return(
        <div className="writeDecorationBar">
            <div className="write-decorators">
                <div className="decorator">
                    <a className="decorator-btn"><ImBold size={23}/></a>
                </div>

                <div className="decorator">
                    <a className="decorator-btn"><FaItalic size={23}/></a>
                </div>

                <div className="decorator">
                    <a className="decorator-btn"><RiListOrdered size={23}/></a>
                </div>

                <div className="decorator">
                    <a className="decorator-btn"><RiListUnordered size={23}/></a>
                </div>

                <div className="decorator">
                    <a className="decorator-btn"><ImQuotesLeft size={23}/></a>
                </div>
            </div>
        </div>
    )
}

export default DecoratorsBar;