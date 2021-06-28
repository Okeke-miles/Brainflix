import React, {Component} from 'react'
import getDate from "../../utils/getDate"
import Comment from "../../components/Comments/Comment"
import CommentDisplay from "../../components/CommentDisplay/CommentDisplay"
import "../../App.scss"
import "../MainVideoDisplay/MainVideoDisplay.scss";
import like from "../../assets/icons/Icon-likes.svg";
import views from "../../assets/icons/Icon-views.svg";
import axios from "axios";

class mainVideoDisplay extends Component {
//I set state for the main video to null, in the first instance.

    state = {
        mainVideoDisplay: null,
    }
    
//I create a function seeking to get a video id, using axios.get. This is the id of the video that will be displayed as the main video.

    getVideoId(videoId) {
        if(videoId === null){
            return false;
          }
        return axios.get(`/api/mainvideo/${videoId}`)
        .then(res => {
          this.setState({
              mainVideoDisplay: res.data, 
          })
        })
        .catch(error=>{console.log(error)})
    }
     
//On mount lifecycle, I set videoid to the props which is passed from the videolist container. Therefore, on mount, the parameter for the function above will be set to the props being passed from the VideoList component.

    componentDidMount(){   
      const { videoId } = this.props;
     
      this.getVideoId(videoId);
    }

//On update lifecycle, a similar function is set, however this is only set if the props being passed from the VideoList component is not equal to the previous props.

    componentDidUpdate(prevProps){
      const { videoId } = this.props;

      if(videoId !== prevProps.videoId && videoId !== null)  {
          this.getVideoId(videoId)
      }
    }

    
    
    render(){
        // const LikeIncrement = (e) => {
        //     const { videoId } = this.props;
        //     axios.put(`http://localhost:9000/api/mainvideo/${videoId}/likes`, videoId.likes)
        //     .then(res=> console.log(res))
        // }
    
    
        if (this.state.mainVideoDisplay===null){
            return <span className="loading__message">Please wait...</span>
        }
        
//Deconstructed my state value in line with react best practices

        const { mainVideoDisplay } = this.state
    
        return (
//I then render out pieces of my deconstructed state to to layout my UI.

            <>
                <div className="selectedentry__style">
                    <div className="flexvideo-container">
                        <video  className="video-poster__style" height="800" poster={ mainVideoDisplay.image}controls><source src={mainVideoDisplay.video}/></video>
                        <div className="video-body__style">
                            <h3 className="video-title__style">{mainVideoDisplay.title}</h3>
                            <div className="mainvideo-container__style">
                                <div className="mainvideo-channel__container">
                                    <p className="video-channel__style">By {mainVideoDisplay.channel}</p>
                                    <p className="video-timestamp__style">{getDate(mainVideoDisplay.timestamp)} ago</p>
                                </div>
                                <div className="views__container">
                                    <p > <img className="views__style" src= {views} alt="views__icon"/>{mainVideoDisplay.views}</p>
                                    <p> <img className="likes__style" src={like} alt="likes__icon"/>{mainVideoDisplay.likes}</p>
                                </div>
                            </div>
                            <p className="video-description__style">{mainVideoDisplay.description}</p>
                    
                        <section>
                          <p className="comment__number">{mainVideoDisplay.comments.length} Comments</p>
                          <Comment videoId = {mainVideoDisplay}/>
                          <CommentDisplay entry={mainVideoDisplay} />
                        </section>
                </div>
            </div>
          </div>

        </>
                
      )
  }
}

export default mainVideoDisplay
