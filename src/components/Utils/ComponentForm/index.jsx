import React from "react";
import './style.css';

export default function ComponentForm(props){
    return(
        <div>
            <form className="formSignIn-form">
                <div className="input-field">
                    <label className="formSignIn-label">Email</label>
                    <input
                        type="email"
                        placeholder="Digite sua senha"
                        className="formSignIn-input"
                    />
                </div>

                <div className="input-field">
                    <label className="formSignIn-label">Senha</label>
                    <input
                        type="password"
                        placeholder="Digite sua senha"
                        className="formSignIn-input"/>
                </div>

                {
                    props.signUp &&
                    
                    <div className="input-field">
                        <label className="formSignIn-label">Confirme sua senha</label>
                        <input
                            type="password"
                            placeholder="Digite sua senha"
                            className="formSignIn-input"/>
                    </div>
                }

                <div className="button-field">
                    <button type="submit" className="formSignIn-btn">Entrar</button>
                </div>
            </form>
        </div>
    )
}