import React, {Component} from 'react'
import "../../App.scss"
import "../Upload/Upload.scss"
import uploadImage from "../../assets/images/Upload-video-preview.jpg"
import axios from "axios"

//In the Upload Component, I am using an alert to notify the user that his video has been published and then using "history" to push the user back to the homepage(with BMX video).
class Upload extends Component {
    formRef = React.createRef();

    SubmitHandler = (e) => {
        e.preventDefault() 
        alert("Your video is published!!!")
        this.props.history.push("/")     
        axios.post("http://localhost:9000/api/mainvideo",{title: e.target.videoupload.value, description: e.target.description.value})
        .then(res=> console.log(res))
    }

    render(){

    return (
        <div className="upload__container">
            <h1 className="header-title__style">Upload Video</h1>
            <div className="video-upload__container">
            <div className="form-input__style">
                <h2 className="header-thumbnail__style">VIDEO THUMBNAIL</h2>
                <img className="upload-image" src= {uploadImage} alt="video-thumbnail"/>
            </div>
                <form className="form__style" ref={form => this.form = form} onSubmit={this.SubmitHandler}>
                    <label htmlFor="videoupload" id="label">TITLE YOUR VIDEO</label>
                        <input type="upload" id="upload" name= "videoupload" placeholder="Add a title to your video"/>
                    <label htmlFor="description" id="description-label">ADD A VIDEO DESCRIPTION</label>
                        <input type="description" id="description" name= "description" placeholder="Add a description of your video"/>
                    <div className= "button-container" >
                        <button type="submit" className="button-publish__style" >PUBLISH</button>
                        <button type="submit" className="button-cancel__style">CANCEL</button>
                    </div>
                </form>
               
            </div>
        </div>
    )
    }
}

export default Upload
