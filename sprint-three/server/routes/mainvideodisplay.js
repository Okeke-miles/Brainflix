const express = require("express");
const router = express.Router();
const mainVideo = require("../data/video-details.json")

const getVideoId = (id, mainVideo) => {
    return mainVideo.filter(video => video.id)
}

router.get('/', (_req, res) => {
    res.status(200).json(mainVideo);
})

router.get('/:videoId', (req, res) => {
    let { videoId } = req.params;
    res.status(200).json(getVideoId(videoId, mainVideo))
})

module.exports = router;