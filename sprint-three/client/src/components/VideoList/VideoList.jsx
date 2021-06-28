import React, {Component} from 'react';
import {NavLink} from "react-router-dom"
import "../../App.scss"
import "../VideoList/VideoList.scss"
import axios from "axios"
import MainVideoDisplay from "../../pages/MainVideoDisplay/MainVideoDisplay"

//My VideoList component takes two states: one is the videolist; the other is the videoid. Both set to an empty array and null respectively. The goal is to use this component as the "brains" behind the mainvideodisplay component. The videoid is eventually passed as a prop to the mainvideodisplay component.

class VideoList extends Component{
  
  state = {
    videoList: [],
    videoId: null,
}

//on mount lifecyle, I set videolist to the data from the API and videoid to a set video id. In order to make sure the dynamic url is functional, I use match.params in an "if statement". Where the match.params does not equal the videoid state and is also not undefined, the state (videoid) is changed to reflect the match.params. I used the && operator to cover for any leakages.

    componentDidMount(){
      axios.get(`/api/videolist`)
      .then(res => res.data)
      .then(data => {
        
        this.setState({
          videoList: data,
          videoId: data[0].id,
        });

        let { videoId } = this.props.match.params;
        if(videoId !== this.state.videoList && videoId !== undefined) {
        this.setState({ 
          videoId: videoId
        })}
      })
      .catch(error=>{console.log(error)})
      }

      
//on update lifecyle, i compare the current match.params with the previous match.params. This is also to ensure the dynamic url is functional upon each update.

    componentDidUpdate(prevProps){
      let { videoId } = this.props.match.params;   

      if(videoId !== prevProps.match.params.videoId)  {
          this.setState({ videoId: videoId })
      }   
    }
    
  render(){

    //I use a filter method (combined with a map method) to render out my UI through pieces of my state.
      return (
        
        <>
        <div className="flex-component">
        <MainVideoDisplay videoId={this.state.videoId} className="mainvideo-component__style"/>
          <section className="videolist-container__style">
            <div className="videolist__content">
              <h2 className="nextvideo-title__style">NEXT VIDEO</h2>
              <div className="videolist__style">
                {(this.state.videoList.filter(video => video.id !== this.state.videoId)
                .map(video => ( 
                 <div key={video.id} className="nextvideo__container">
                      <div className="nextvideo__flex">
                        <NavLink to={`/video/${video.id}`}>
                          <img className="nextvideo__style" src={video.image} alt={video.name} width="140" height="120" />
                        </NavLink>
                          
                        <div className="nextvideo-list-container">
                            <p className="nextvideo-desc__style" key={video.id}>
                              {video.title}
                            </p>
                            <p className="nextvideo-channel__style">
                              {video.channel}
                            </p>
                        </div>
                      </div>
                  </div> 
              ))
                )}
              </div>
            </div>
          </section>
          </div>
          </>
  ) }
}

export default VideoList
