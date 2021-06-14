import './App.scss';
import React from 'react';
import Header from "./Components/Header/Header";
import VideoList from "./Components/VideoList/VideoList";
import Data from "./data/videos.json";
import DataDetails from "./data/video-details.json";
import MainVideoDisplay from "./Components/MainVideoDisplay/MainVideoDisplay"

class App extends React.Component{
  state = {
    videos: Data,
    videoDetail: DataDetails,
    mainEntry: DataDetails[0],
  }


setCurrentVideo = (id) => {
  const individualEntry = this.state.videoDetail.find((video) => video.id === id);
  this.setState({ mainEntry: individualEntry });
};

videoDisplay = (event) => {
  
  event.preventDefault();
  let image = this.state.videoDetail.image;
  let title = this.state.videoDetail.title;
  let channel = this.state.videoDetail.channel;
  let id = this.state.videoDetail.id;
  let description = this.state.videoDetail.description;
  let likes = this.state.videoDetail.likes;
 
  let timestamp= this.state.videoDetail.timestamp;
  let views = this.state.videoDetail.views;
  let video = this.state.videoDetail.video;
  let newVideo = { id: id, title: title, image: image, channel: channel, description: description, likes: likes, timestamp:timestamp, views: views, video: video};
  let newArray = this.state.videos.concat(newVideo);
  this.setState({ videoDetail: newArray });
  event.target.reset();
};

  render(){
 
  return (
    
    <div className="App">
    
      <Header entry={this.videoDisplay}/>

      <MainVideoDisplay entry={this.state.mainEntry}
      comments={this.state.comments}
      videoDetail={this.state.videoDetail}
      setCurrentVideo={this.setCurrentVideo}
      videos = {this.state.videos} 
      />     
      <VideoList videos = {this.state.videos} 
      videoDetail={this.state.videoDetail}
      setCurrentVideo={this.setCurrentVideo}
      entry={this.state.mainEntry}
      />
    
    </div>
  )}
}

export default App;
