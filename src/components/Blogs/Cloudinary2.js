import React, { Component } from "react";
import Dropzone from "react-dropzone";
import axios from "axios";

const CLOUDINARY_UPLOAD_PRESET = process.env.REACT_APP_COUDINARY_UPLOAD_PRESET; 
const REACT_APP_CLOUDINARY_CLOUD_NAME =
  process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
const REACT_APP_CLOUDINARY_API_KEY = process.env.REACT_APP_CLOUDINARY_API_KEY;

class Cloudinary2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadedFile: null,
      uploadedFileCloudinaryUrl: "",
      images: []
    };
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files
    });
    // console.log(this.state)

    this.handleImageUpload(files);
  }

  handleImageUpload = async file => {
    const uploads = file.map(image => {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("tags", "{TAGS}"); 
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET); 
      formData.append("api_key", REACT_APP_CLOUDINARY_API_KEY); 
      formData.append("timestamp", (Date.now() / 1000) | 0);

      return axios
        .post(
          `https://api.cloudinary.com/v1_1/${REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
          formData,
          { headers: { "X-Requested-With": "XMLHttpRequest" } }
        )
        .then(response => {
          this.props.getImage(response.data.url)
        //   this.setState({
        //     images: [...this.state.images, response.data.url]
        //   });
        });
    });

    // console.log(uploads);
  };

  render() {
    let images = this.state.images.map(image => {
      
      return (
        <div key={image} className="image_cloudinary2">
          <figure>
            <img src={image} alt="" />
          </figure>
          <p>{image}</p>
        </div>
      );
    });
    // console.log(this.state);
    return (
        <div className="App">
        <div className="dropzone">
          <Dropzone
            style={{ border: "1px solid black" }}
            multiple={true} 
            accept="image/*" 
            onDrop={this.onImageDrop.bind(this)}
            >
            {({ getRootProps, getInputProps }) => {
                return (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  {<p>Click to add multiple photos.</p>}
                </div>
              );
            }}
          </Dropzone>
        </div>
        {images}
      </div>
    );
  }
}

export default Cloudinary2;