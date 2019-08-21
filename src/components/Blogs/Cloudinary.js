import React, { Component } from "react";
import Dropzone from "react-dropzone";
import axios from "axios";


const CLOUDINARY_UPLOAD_PRESET = process.env.REACT_APP_COUDINARY_UPLOAD_PRESET; 
const REACT_APP_CLOUDINARY_CLOUD_NAME = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
const REACT_APP_CLOUDINARY_API_KEY = process.env.REACT_APP_CLOUDINARY_API_KEY;

export default class Cloudinary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            uploadedFile: null,
            uploadedFileCloudinaryUrl: '',
            images: []
        }
    }
    onImageDrop(files) {
        this.setState({
            uploadedFile: files
        })
        this.handleImageUpload(files)
    }
    handleImageUpload = async file => {
        const uploads = file.map(image => {
            const formData = new Formdata()
            formData.append('file', image)
            formData.append('tags', '{TAGS')
            formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            formData.append('api_key', REACT_APP_CLOUDINARY_API_KEY)
            formData.append('timestamp', (Date.now() / 1000) | 0)

            return axios
            .post(`https://api.cloudinary.com/v1_1/${REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`, formData, {headers: { "X-Requested-With": "XMLHttpRequest" }})
            .then(response => {
                this.setState({
                    images: [...this.state.images, response.data.url]
                })
            })
        })
        console.log(uploads)
    }
    render() {
        let images = this.state.images.map(image => {
            return (
                <div key={image} className='image'>
                    <figure>
                        <img src={image} alt=""/>
                    </figure>
                    <p>{image}</p>
                </div>
            )
        })
    }
}