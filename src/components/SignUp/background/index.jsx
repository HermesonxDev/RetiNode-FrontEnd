import React from "react";
import './style.css';
import ComponentSignIn from "../../componentSignIn";

function Background(){
    return(
        <div>
            <div className="backgroundSignUp">
                <div className="headerSignUp">
                    <h1>Junte-se a RetiNode</h1>
                </div>
                
                <div className="bodySignUp">
                    <div className="loginField">
                        <ComponentSignIn text="Entre"/>
                    </div>
                    <div className="createAccount">
                        <p className="text">Já tem uma conta? <a href="/SignIn">Entrar</a></p>
                    </div>
                </div>

                <div className="footerSignUp">
                    <div className="termOfService">
                        <p>Clique em entrar para concordar em médio com os termos de serviço, e reconheça a política de privacidade</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Background;