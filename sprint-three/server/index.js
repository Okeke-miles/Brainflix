const express = require("express")
const app = express()
const cors = require("cors")


const mainVideoRoute = require("./routes/mainVideoDisplay")
const videoListRoute = require("./routes/videoList")

require("dotenv").config();
const port = process.env.PORT || 9000;

app.use(express.static("public"))
app.use(express.json());
app.use(cors())

app.use('/api/mainvideo', mainVideoRoute);
app.use('/api/videolist', videoListRoute);


app.get('/', (req, res) => {
    res.send('Welcome Home')
})

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})