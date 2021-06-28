import React from 'react'
import "../../App.scss"
import "../Comments/Comment.scss"
import avatar from "../../assets/images/Mohan-muruge.jpg"
import axios from "axios"


function Comment({ videoId }) {
   

    const submitHandler = (event) => {
        event.preventDefault()        
        axios.post( `/api/mainvideo/${videoId.id}/comments`, 
        {comment: event.target.newcomment.value})
        .then(res=> console.log(event.target.newcomment.value))
    }

    return (
        <div>
            <form className="comment__form" onSubmit={submitHandler}>
                <div className="comment-area__style">                    
                    <label className= "label" htmlFor="newcomment" >
                        JOIN THE CONVERSATION
                    </label> 
                    <span>
                        <img className=" avatar__style" src= {avatar} alt="avatar" />
                        <input type="text" id="name" name= "newcomment" placeholder="Write comment here" required />
                    </span>
                </div>
                <button type="submit" id="comment__button">COMMENT</button>
            </form>         
        </div>
    )
}


export default Comment
