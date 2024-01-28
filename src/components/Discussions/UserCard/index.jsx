import React from "react";
import './style.css';
import UserPhoto from "../../../assets/img/user.jpg";
import ImageCard from "../../../assets/img/ImageCard.png"
import { FaRegComment } from "react-icons/fa6";
import { SlLike } from "react-icons/sl";
import { LiaReadme } from "react-icons/lia";
import { MdFavoriteBorder } from "react-icons/md";

function UserCard(props){
    return(
        <div>
            <div className="userCardContent">
                <div className="userCardContent1">
                    {
                        props.img
                        ?
                        <img src={props.img} alt="User photo" className="photoUserCard" />
                        :
                        <img src={UserPhoto} alt="User photo" className="photoUserCard imageBorder" />
                    }

                    <div className="userDataCard">
                        <h3 className="userNameCard">Thiago Pinheiro dos Santos</h3>
                        {
                            props.linkPost
                            ?
                            <div className="userDateAndData">
                                <a href="" className="linkPost"><p>{props.linkPost}</p></a>
                                <p>- {props.date}</p>
                            </div>
                            :
                            <div className="userDateAndData">
                                <a href="" className="linkPost"><p>ThiagoPinheiro.com.br</p></a>
                                <p>- 1 jan, 2023</p>
                            </div>
                        }
                    </div>
                </div>

                <div className="userCardContent2">
                    <div className="userCardInfo">
                        {
                            props.title
                            ?
                            <div className="userCardSubInfos">
                                <div className="subInfoc1">
                                    <h2>{props.title}</h2>
                                    <p>{props.description}</p>
                                </div>
                                <div className="subInfoC2">
                                    <img src={props.image} alt="Image Post" className="subInfoImage" />
                                </div>
                            </div>
                            :
                            <div className="userCardSubInfos">
                                <div className="subInfoc1">
                                    <h2>Como ser um Desenvolvedor FullStack?</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas eveniet explicabo sint officia modi magnam ea nobis labore fugiat eaque perspiciatis ducimus maxime, doloribus eos! Omnis corrupti animi fugit veniam!</p>
                                </div>
                                <div className="subInfoC2">
                                    <img src={ImageCard} alt="Image Post" className="subInfoImage imageBorder" />
                                </div>
                            </div>
                        }
                    </div>
                </div>

                <div className="userCardContent3">
                    <div className="iconsDiv">
                        <div className="icons">
                            <p><FaRegComment/> <a href="">Discutir</a></p>
                        </div>

                        <div className="icons">
                            <p><SlLike /> 107 curtidas</p>
                        </div>

                        <div className="icons">
                            <p><LiaReadme /> 254 leituras</p>
                        </div>
                    </div>

                    <div>
                        <button className="favoriteButton"><MdFavoriteBorder size={18}/></button>
                    </div>
                </div>

                <div className="userCardContent4">
                    <input type="text" name="comment" placeholder="Adicione um comentário pensativo" className="commentArea" />
                </div>

                <div className="userCardContent5">
                    <h3 className="comments"><a href="">Comentários</a></h3>
                </div>
            </div>
        </div>
    )
}

export default UserCard;