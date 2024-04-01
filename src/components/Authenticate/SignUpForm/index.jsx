import React from 'react';
import '../styles/style.css'
import ComponentForm from "../../Utils/ComponentForm";

export default function Background(){
    return(
        <div>
            <div className="background-screen">
                <div className="background-header">
                    <h1>Junte-se a RetiNode</h1>
                </div>
                
                <div className="background-body">
                    <div className="loginField">
                        <ComponentForm signUp="true"/>
                    </div>
                    <div className="createAccount-signUp">
                        <p className="text">Já tem uma conta? <a href="email-signIn">Entrar</a></p>
                    </div>
                </div>

                <div className="background-footer-signUp">
                    <div className="termOfService">
                        <p>Clique em entrar para concordar em médio com os termos de serviço, e reconheça a política de privacidade</p>
                    </div>
                </div>
            </div>
        </div>
    )
}