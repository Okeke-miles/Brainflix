const express = require("express");
const router = express.Router();
const videoList = require("../data/video-details.json")


router.get('/', (_req, res) => {
    res.status(200).json(videoList);
})

module.exports = router;