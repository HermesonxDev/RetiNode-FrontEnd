import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import GoogleLogin from "react-google-login";
import './style.css';

function ComponentSignIn(props){

    // const responseGoogle = (response) => {
    //     console.log(response)
    // }

    return(
        <div>
            <div className="components">
                <div className="componentDiv">
                    {/* <GoogleLogin
                        clientId='4748182425-as5qha965m3e79qtv4vjhho53q3aqnaj.apps.googleusercontent.com'
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                        render={renderProps => (
                            <button
                                className="google-login-button"
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                            >
                                <FcGoogle className="icon" size={23}/>
                                <a className="componentText">{props.text} com Google</a>
                            </button>
                          )}
                    /> */}

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