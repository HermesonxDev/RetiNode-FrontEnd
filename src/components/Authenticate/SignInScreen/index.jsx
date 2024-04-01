import React from "react";
import '../styles/style.css';
import ComponentSignIn from "../../Utils/ComponentSignIn";

function Background(){
    return(
        <div>
            <div className="background-screen">
                <div className="background-header">
                    <h1>Bem-vindo de volta</h1>
                </div>
                
                <div className="background-body">
                    <div className="loginField">
                        <ComponentSignIn link="signIn/email-signIn"/>
                    </div>
                    <div className="createAccount">
                        <p className="text">Sem conta ainda? <a href="SignUp">Criar uma</a></p>
                    </div>
                </div>

                <div className="background-footer">
                    <div className="tip">
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