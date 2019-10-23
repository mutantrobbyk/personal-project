import React, { Component } from "react";
import "./ProjectAdmin.css";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {connect} from 'react-redux'
import Cloudinary from "../../Blogs/Cloudinary";

class ProjectAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      title: "",
      sub_1: "",
      sub_2: "",
      sub_3: "",
      body: "",
      cover_image: "",
      url: ""
    };
    this.handleChange2 = this.handleChange2.bind(this);
  }
  hide () {
    const drop = document.getElementById('dropdown')
    if (!drop.classList.contains('hide')) {
        drop.classList.add('hide')
    }
}
  componentDidMount() {
    this.getAllProjects();
  }
  componentDidUpdate() {
    this.checkAdmin()
  }
  checkAdmin = () => {
      if (!this.props.is_admin) {
        this.props.history.push(`/auth`)
      }
  }
  getUrl = url => {
    this.setState({
      cover_image: url
    });
  };
  getAllProjects = () => {
    axios.get("/blog/getAllProjects").then(res => {
      this.setState({
        projects: res.data
      });
    });
  };
  createProject = body => {
    axios.post("/blog/createProjects", body).then(res => {
      this.setState({
        projects: res.data
      });
    });
  };
  deleteProject = async project_id => {
    let res = await axios.delete(`/blog/${project_id}`);
    this.setState({
      projects: res.data
    });
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleChange2(value) {
    this.setState({ body: value });
  }
  goBack = () => {
    this.props.history.push("/admin/landing");
  };
  render() {
    const { title, sub_1, sub_2, sub_3, body, cover_image } = this.state;
    return (
      
      <div className="ProjectAdmin">
        <div className="admin-outer-box">
          {this.state.projects.map(el => {
            return (
              <div className="admin-projects" key={el.project_id}>
                <div className='box_1'>
                  <img className="moto" src={el.cover_image} alt="Project" />
                </div>
                <div className='box_2'>
                  <h3>{el.title}</h3>
                  <p>Year: {el.sub_1}</p>
                  <p>Make: {el.sub_2}</p>
                  <p>Model: {el.sub_3}</p>
                </div>
                <div className='box_3'>
                  <section dangerouslySetInnerHTML={{ __html: el.body }} />
                </div>
                <div className='box_4'>
                  <button
                    onClick={() =>
                      this.props.history.push(
                        `/admin/projects/edit/${el.project_id}`
                      )
                    }
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      this.deleteProject(el.project_id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
          <hr/>
          <h2>Create a New Post</h2>
          <br/>
          <br/>
        <div className='project_inputs'>
          <input
            value={this.state.title}
            onChange={e => this.handleChange(e)}
            type="text"
            placeholder="title"
            name="title"
          />
          <input
            value={this.state.sub_1}
            onChange={e => this.handleChange(e)}
            type="text"
            placeholder="year"
            name="sub_1"
          />
          <input
            value={this.state.sub_2}
            onChange={e => this.handleChange(e)}
            type="text"
            placeholder="make"
            name="sub_2"
          />
          <input
            value={this.state.sub_3}
            onChange={e => this.handleChange(e)}
            type="text"
            placeholder="model"
            name="sub_3"
          />
          <div className='quill_box'>
          <ReactQuill className='quill' value={this.state.body} onChange={this.handleChange2} />

          </div>
          <input
            value={this.state.cover_image}
            onChange={e => this.handleChange(e)}
            type="text"
            placeholder="cover_image"
            name="cover_image"
          />
          <br/>
          <br/>
          <Cloudinary getUrl={this.getUrl} />
          <br/>
          <br/>
          <button
            onClick={() => {
              this.createProject({
                title,
                sub_1,
                sub_2,
                sub_3,
                body,
                cover_image
              });
              // this.uploadFile()
              this.setState({
                title: "",
                sub_1: "",
                sub_2: "",
                sub_3: "",
                body: "",
                cover_image: "",
                isUploading: false,
                url: "",
                file: {}
              });
            }}
          >
            CREATE PROJECT
          </button>
          <br/>
          <button onClick={() => this.goBack()}>BACK TO ADMIN</button>
        </div>
      </div> 
    );
  }
}
function mapStateToProps(Redux) {
  const {is_admin} = Redux
  return (
    {is_admin}
  )
}
export default connect(mapStateToProps)(ProjectAdmin)