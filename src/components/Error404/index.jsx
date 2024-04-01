import './style.css'
import Error from "../../assets/img/Error.png"

export default function Error404(){
    return(
        <div className="error404-component">
            <div className="error404-left">
                <p className='error404-title'>Erro 404</p>
                <h4 className='error404-subtitle'>Não conseguimos encontrar a página <br />que você está procurando</h4>
                <a href="/" className="error404-btn">Home</a>
            </div>

            <div className="error404-right">
                <img src={Error} alt="Imagem de erro" />
                <div className="error404-shadow"></div>
            </div>
        </div>
    )
}