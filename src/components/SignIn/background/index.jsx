import React from "react";
import './style.css';
import ComponentSignIn from "../../componentSignIn";

function Background(){
    return(
        <div>
            <div className="backgroundSignIn">
                <div className="headerSignIn">
                    <h1>Bem-vindo de volta</h1>
                </div>
                
                <div className="bodySignIn">
                    <div className="loginField">
                        <ComponentSignIn text="Entre"/>
                    </div>
                    <div className="createAccount">
                        <p className="text">Sem conta ainda? <a href="SignUp">Criar uma</a></p>
                    </div>
                </div>

                <div className="footerSignIn">
                    <div className="help">
                        <p>Esqueceu o e-mail ou problemas para entrar? <a href="">Obtenha ajuda</a></p>
                    </div>

                    <div className="termOfService">
                        <p>Clique em entrar para concordar em médio com os termos de serviço, e reconheça a política de privacidade</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Background;