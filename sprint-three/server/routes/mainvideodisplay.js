const express = require("express");
const router = express.Router();
const mainVideo = require("../data/video-details.json")
const fs= require("fs")
const { v4: uuidv4 } = require('uuid');



router.get('/', (_req, res) => {
    res.status(200).json(mainVideo);
})

router.get('/:videoId', (req, res) => {
    let { videoId } = req.params;
    const videoInfo = mainVideo.find(video => video.id === videoId)
    if(!videoInfo) {
    res.status(400).send(`There is no video with id of ${videoId}`)
    }
    res.status(200).json(videoInfo)
})

//Made this route to delete videos, as I had created a lot. Would attach it to an event handler in the client side but unsure where to put the button so as not to affect the design.
router.delete('/:videoId', (req, res) =>{
  let { videoId } = req.body;
    const videoInfo = mainVideo.findIndex(video => video.id === videoId)
    const video = mainVideo[videoInfo];
    mainVideo.splice(videoInfo, 1)
    res.json(video)
})
  
//Route to post videos from the Upload Page
router.post('/', (req, res) => {
    const { video, title, channel, description, timestamp } = req.body;

     mainVideo.push({
      id: uuidv4(),
      video: "https://project-2-api.herokuapp.com/stream",
      title,
      channel: "tooExclusive",
      description,
      timestamp: Date.now(),
      image: ("/Upload-video-preview.jpg"),
      views: "1",
      likes: "110985",
      duration: "4:01",
      comments: [
      {
        "name": "Micheal Lyons",
        "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
        "id": "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
        "likes": 0,
        "timestamp": 1545162149000
      },]
     });
    
    fs.writeFile("./data/video-details.json", JSON.stringify(mainVideo, null, 2), () => console.log('data has been persisted'))
    res.json({success: true, mainVideo}); 
  });

  //Route to post comments on a particular video

  router.post('/:videoId/comments', (req, res) => {
    let { videoId } = req.params;
    const videoInfo = mainVideo.find(video => video.id === videoId)
    const { comment } = req.body;
    const newComment = {
      name: "Samurai Jack",
      comment, 
      id: uuidv4(),
      timestamp: Date.now()
    }
    videoInfo.comments.push(newComment)
    fs.writeFile("./data/video-details.json", JSON.stringify(mainVideo, null, 2), () => console.log('data has been persisted'))
    res.status(200).json(mainVideo)}
  
  )

  //My attempt at creating a route for incrementing likes
  router.put('/:videoId/likes', (req, res) => {
    let { videoId } = req.params;
    const videoInfo = mainVideo.find(video => video.id === videoId)
    let likes = parseInt(videoInfo.likes++)
    fs.writeFile("./data/video-details.json", JSON.stringify(mainVideo, null, 2), () => console.log('data has been persisted'))
    res.status(200).json(likes)
  })

  

module.exports = router;