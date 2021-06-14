import React from 'react';
import "../../App.scss"
import "../Header/Header.scss";
import bfLogo from "../../assets/Logo/Logo-brainflix.svg"
import avatar from "../../assets/Images/Mohan-muruge.jpg"


function Header(props) {
    return (
        <div>
            <header className="header">
                <img src={bfLogo} alt = "Logo" className="header__logo"/>
                <div className="header__content">
                    <form className="form__style" onSubmit={props.videoDisplay}>
                        <label htmlFor="text" id="name"></label>
                        <input className="searchIcon" type="search" id="search" name= "search" placeholder="Search"/>
                        <div className="button__style">
                            <button type="submit" id="upload__button">+ UPLOAD</button> <img className= "avatar"  src={avatar} alt = "avatar" />
                        </div>
                    </form>
                </div>
            </header>
            
        </div>
    )
}

export default Header
