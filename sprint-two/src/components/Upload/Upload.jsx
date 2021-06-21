import React from 'react'
import "../../App.scss"
import "../Upload/Upload.scss"
import uploadImage from "../../assets/images/Upload-video-preview.jpg"

//In the Upload Component, I am using an alert to notify the user that his video has been published and then using "history" to push the user back to the homepage(with BMX video).
function Upload(props) {

    const SubmitHandler = (event) => {
        event.preventDefault()  
        alert("Your video is published!!!")
        props.history.push("/")
    }

    return (
        <div className="upload__container">
            <h1 className="header-title__style">Upload Video</h1>
            <div className="video-upload__container">
            <div className="form-input__style">
                <h2 className="header-thumbnail__style">VIDEO THUMBNAIL</h2>
                <img className="upload-image" src= {uploadImage} alt="video-thumbnail"/>
            </div>
                <form className="form__style">
                    <label htmlFor="upload" id="label">TITLE YOUR VIDEO</label>
                        <input type="upload" id="upload" name= "upload" placeholder="Add a title to your video"/>
                    <label htmlFor="description" id="description-label">ADD A VIDEO DESCRIPTION</label>
                        <input type="description" id="description" name= "description" placeholder="Add a description of your video"/>
                    <div className= "button-container" >
                        <button type="button" className="button-publish__style" onClick={SubmitHandler}>PUBLISH</button>
                        <button className="button-cancel__style">CANCEL</button>
                    </div>
                </form>
               
            </div>
        </div>
    )
}

export default Upload
