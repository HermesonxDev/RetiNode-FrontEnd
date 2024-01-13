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
                    <FcGoogle className="icon"/>
                    <a href="" className="componentText">{props.text} com Google</a>
                </div>

                <div className="componentDiv">
                    <BsFacebook className="icon"/>
                    <a href="" className="componentText">{props.text} com Facebook</a>
                </div>

                <div className="componentDiv">
                    <FaApple className="icon"/>
                    <a href="" className="componentText">{props.text} com Apple</a>
                </div>

                <div className="componentDiv">
                    <MdOutlineEmail className="icon"/>
                    <a href="" className="componentText">{props.text} com Email</a>
                </div>
            </div>
        </div>
    )
}

export default ComponentSignIn;