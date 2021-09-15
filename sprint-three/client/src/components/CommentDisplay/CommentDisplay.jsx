import React from 'react';
import getDate from "../../utils/getDate"
import "../../App.scss"
import "../CommentDisplay/CommentDisplay.scss"

//The purpose of this component is to lay out the UI for the comment section
function CommentDisplay ({entry, comments}){
        
    return (
        <section>
            {comments.map((comment) =>(
                <main key={comment.id}className="comment__style">
                    <div className="comment-name__style"> 
                        <span className="comment-photo__style" ><p className="card__photo"></p>{comment.name}</span>
                        <span className="comment-date__style">{getDate(comment.timestamp)} ago</span>
                    </div>
                    <div className="comment-body__style">
                        {comment.comment}
                    </div>  
                </main>
            ))}
        </section>
    )
}

export default CommentDisplay
