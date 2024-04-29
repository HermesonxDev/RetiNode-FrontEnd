import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import './style.css';

function ComponentSignIn(props){
    return(
        <div>
            <div className="components">
                <div className="componentDiv">
                    <FcGoogle className="icon" size={23}/>
                    <a className="componentText">Entre com Google</a>
                </div>

                <div className="componentDiv">
                    <BsFacebook className="icon"/>
                    <a className="componentText">Entre com Facebook</a>
                </div>

                <div className="componentDiv">
                    <FaApple className="icon"/>
                    <a className="componentText">Entre com Apple</a>
                </div>

                <div className="componentDiv">
                    <MdOutlineEmail className="icon"/>
                    <a href={props.link} className="componentText">Entre com Email</a>
                </div>
            </div>
        </div>
    )
}

export default ComponentSignIn;