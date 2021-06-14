import React from 'react';
import getDate from "../GetDate/GetDate"
import "../../App.scss"
import "../CommentDisplay/CommentDisplay.scss"


function CommentDisplay (props){
        
    return (
        <div>
            {props.entry.comments.map((comment) =>(
    // I tried putting the key on the list item but it gave me a warning :(
                <ul key={comment.id}className="comment__style">
                    <li className="comment-name__style"
                        > <p className="card__photo"></p>{comment.name}<span className="comment-date__style">{getDate(comment.timestamp)} ago</span></li>
                    <li className="comment-body__style">        {comment.comment}</li>  
                </ul>
            ))}
        </div>
    )
}

export default CommentDisplay
