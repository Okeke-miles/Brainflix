import React from 'react';
import "../../App.scss"
import "../VideoList/VideoList.scss"
function VideoList(props){


  return (
      <section className="videolist-container__style">
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
  )}

export default VideoList
