import React from 'react'
import "../../App.scss"
import "../Comments/Comment.scss"
import Avatar from "../../assets/Images/Mohan-muruge.jpg"


function Comment() {
    return (
        <div>
            <form className="comment__form">
                <div className="comment-area__style">
                        
                    <label className= "label" htmlFor="name" >JOIN THE CONVERSATION</label>
                    <span><img className=" avatar__style" src= {Avatar} alt="avatar" /><input type="name" id="name" name= "name" placeholder="Write comment here" required /></span>
                </div>
                <button type="submit" id="comment__button">COMMENT</button>
            </form>
            
        </div>
    )
}

export default Comment
