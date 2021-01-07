import React, { Component } from "react";
import "./BlogEdit.css";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Cloudinary from "../../Blogs/Cloudinary";
import Cloudinary2 from "../../Blogs/Cloudinary2";
import { clearUserInfo } from "../../../ducks/reducer";
import { connect } from "react-redux";

class BlogEdit extends Component {
  //have access to project_id from match.params
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      sub_1: "",
      sub_2: "",
      sub_3: "",
      body: "",
      cover_image: "",
      images: [],
    };
    this.handleChange2 = this.handleChange2.bind(this);
  }

  checkSession = () => {
    axios.get("/auth/currentuser").then((res) => {
      console.log(res.data);
      if (res.data.message === "No User On Session") {
        this.props.clearUserInfo();
        this.checkAdmin();
      }
    });
  };
  componentDidUpdate() {
    this.checkSession();
    this.checkAdmin();
  }
  checkAdmin = () => {
    if (!this.props.is_admin) {
      this.props.history.push(`/auth`);
    }
  };
  handleChange2(value) {
    this.setState({ body: value });
  }
  componentDidMount() {
    this.checkSession();
    this.getProjects();
    console.log(this.images);
  }
  getImage = (image) => {
    console.log(image);
    if (this.state.images) {
      this.setState({
        images: [...this.state.images, image],
      });
    } else {
      console.log(false);
    }
    console.log(this.state);
  };
  deleteImage = (id) => {
    let body = { project_id: this.state.project_id };
    console.log(this.state.project_id);
    axios.delete(`/blog/images/${id}`, body).then((res) => {});
  };
  getUrl = (url) => {
    this.setState({
      cover_image: url,
    });
  };
  getProjects = () => {
    axios
      .get(`/blog/getAllProjects/${this.props.match.params.project_id}`)
      .then(async (res) => {
        console.log(res.data);
        //filter through the array and take off the image and put it into an array
        //returns image if it exists
        // eslint-disable-next-line
        let newArray = await res.data.map((el) => {
          console.log(el);
          if (el.image !== "" && el.image !== null) {
            return { image: el.image, id: el.id };
          }
        });
        this.setState({
          project_id: res.data[0].project_id,
          title: res.data[0].title,
          sub_1: res.data[0].sub_1,
          sub_2: res.data[0].sub_2,
          sub_3: res.data[0].sub_3,
          body: res.data[0].body,
          cover_image: res.data[0].cover_image,
          images: newArray,
        });
      });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  updateProject = (project_id, body) => {
    axios.put(`/blog/${project_id}`, body).then(() => {
      this.goBack();
    });
  };
  goBack = () => {
    this.props.history.push("/admin/projects");
  };
  render() {
    // console.log(this.state)
    let { title, sub_1, sub_2, sub_3, body, cover_image, images } = this.state;
    // console.log(title)
    return (
      <div>
        BlogEdit
        <div>
          <input
            onChange={(e) => this.handleChange(e)}
            value={title}
            name="title"
            type="text"
          />
          <input
            onChange={(e) => this.handleChange(e)}
            value={sub_1}
            name="sub_1"
            type="text"
          />
          <input
            onChange={(e) => this.handleChange(e)}
            value={sub_2}
            name="sub_2"
            type="text"
          />
          <input
            onChange={(e) => this.handleChange(e)}
            value={sub_3}
            name="sub_3"
            type="text"
          />
          <ReactQuill value={body} onChange={this.handleChange2} />
          <input
            onChange={(e) => this.handleChange(e)}
            value={cover_image}
            name="cover_image"
            type="text"
          />
          <Cloudinary getUrl={this.getUrl} />
        </div>
        <div>
          <button
            onClick={() =>
              this.updateProject(this.props.match.params.project_id, this.state)
            }
          >
            UPDATE CHANGES
          </button>
          <button onClick={() => this.goBack()}>CANCEL</button>
        </div>
        <div>
          <Cloudinary2 getImage={this.getImage} />
        </div>
        <div>
          {!images ? (
            images.map((el) => {
              return (
                <div key={el.id}>
                  <img
                    className="multiple_img"
                    src={el.image ? el.image : el}
                    alt=""
                  />
                  <button onClick={() => this.deleteImage(el.id)}>
                    DELETE IMAGE
                  </button>
                </div>
              );
            })
          ) : (
            <div>No Images</div>
          )}
        </div>
      </div>
    );
  }
}
function mapStateToProps(Redux) {
  const { is_admin } = Redux;
  return { is_admin };
}
export default connect(mapStateToProps, { clearUserInfo })(BlogEdit);
