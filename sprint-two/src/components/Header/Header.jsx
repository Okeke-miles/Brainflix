import React from 'react';
import "../../App.scss"
import {Link} from "react-router-dom"
import "../Header/Header.scss";
import bfLogo from "../../assets/logo/Logo-brainflix.svg"
import avatar from "../../assets/images/Mohan-muruge.jpg"


//In my Header Component, I have placed links to the homepage (with BMX video) on the brainflix logo and links to the upload page component on the upload button.

function Header() {

    const submitHandler = (event) => {
        event.preventDefault() 
        event.target.reset()  
    }

    return (
        <div>
            <header className="header">
                <Link to= "/">
                <img src={bfLogo} alt = "Logo" className="header__logo"/>
                </Link>
                <div className="header__content">
                    <form className="form__style" onSubmit={submitHandler}>
                        <label htmlFor="text" id="name"></label>
                        <input className="searchIcon" type="search" id="search" name= "search" placeholder="Search"/>
                        <div className="button__style">
                            <Link to="/upload">
                                <button type="submit" id="upload__button">+ UPLOAD</button>
                            </Link>
                            <img className= "avatar"  src={avatar} alt = "avatar" />
                        </div>
                    </form>
                </div>
            </header>     
        </div>
    )
}

export default Header
