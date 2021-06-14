import React from 'react'
import getDate from "../GetDate/GetDate"
import Comment from "../Comments/Comment"
import CommentDisplay from "../CommentDisplay/CommentDisplay"
import "../../App.scss"
import "../MainVideoDisplay/MainVideoDisplay.scss"
import Like from "../../assets/Icons/Icon-likes.svg"
import Views from "../../assets/Icons/Icon-views.svg"




function mainEntry(props) {
 
    if (props.entry===null){
        return ""
    }
  
return (
    <>
        <div className="selectedentry__style">
            <div className="flexvideo-container">
                <video  className="video-poster__style" height="800" poster={props.entry.image}controls><source src={props.entry.video}/></video>
                <div className="video-body__style">
                    <h3 className="video-title__style">{props.entry.title}</h3>
                    <div className="mainvideo-container__style">
                        <div className="mainvideo-channel__container">
                            <p className="video-channel__style">By {props.entry.channel}</p>
                            <p className="video-timestamp__style">{getDate(props.entry.timestamp)} ago</p>
                        </div>
                        <div className="views__container">
                            <p > <img className="views__style" src= {Views} alt="views__icon"/>{props.entry.views}</p>
                            <p> <img className="likes__style" src={Like} alt="likes__icon"/>{props.entry.likes}</p>
                        </div>
                    </div>
                    <p className="video-description__style">{props.entry.description}</p>
              
            <section>
                <p className="comment__number">{props.entry.comments.length} Comments</p>
                <Comment />
                <CommentDisplay entry={props.entry} />
            </section>
        </div>
    </div>
      
    {/* Section created solely for styling the Desktop layout purposes as content in the VideoList component. I tried using position absolute however I couldnt get the layout to stop jumping around, so i used display none :)  */}
    <section className="pseudo-videolist-container__style">
        <div className="videolist__content">
                <h2 className="nextvideo-title__style">NEXT VIDEO</h2>
            <div className="videolist__style">{props.videoDetail.map((video) => {return (
            (video.id!==props.entry.id) ? 
                <div key={video.id} className="nextvideo__container">
                    <div className="nextvideo__flex">
                            <video className="nextvideo__style" poster={video.image} width="140" height="120" onClick={() => props.setCurrentVideo(video.id)}>
                            <source className="video__style" src={video.video}/>
                            </video>
                            <div className="nextvideo-list-container">
                                <ul>
                                    <li className="nextvideo-desc__style"
                                    key={video.id}>{video.title}
                                    </li>
                                    <li
                                    className="nextvideo-channel__style">
                                    {video.channel}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> : ("")
                    )
                    })}
                </div>
            </div>
        </section>
    </div>

    </>
        
    )
}

export default mainEntry
