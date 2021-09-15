import React from 'react'
import { useState, useEffect } from 'react'
import "../../App.scss"
import "../Comments/Comment.scss"
import avatar from "../../assets/images/Mohan-muruge.jpg"
import axios from "axios"


function Comment({ videoId, comments }) {
   

    const submitHandler = (event) => {
        event.preventDefault()    
        axios.post( `/api/mainvideo/${videoId.id}/comments`, 
        {comment: event.target.newcomment.value})
        .then(res=> console.log(event.target.newcomment.value))
       
    }

    const handleAdd = (event) => {
        event.target.reset()
        axios.get(`/api/mainvideo/${videoId.id}`)
        .then(res => {
         console.log(res)
        })
        .catch(error=>{console.log(error)})
    }

    return (
        <div>
            <form className="comment__form" 
            type="reset" 
            defaultValue="Reset"
            
            onSubmit={(event)=>{
                submitHandler(event)
                handleAdd(event)
                }}>
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
