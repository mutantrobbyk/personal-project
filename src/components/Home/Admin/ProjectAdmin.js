import React, { Component } from "react";
import "./ProjectAdmin.css";
import axios from "axios";
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export default class ProjectAdmin extends Component {
  constructor (props) {
    super (props)
    this.state = {
      projects: [],
      title: "",
      sub_1: "",
      sub_2: "",
      sub_3: "",
      body: "",
      cover_image: "",
    };
    this.handleChange2 = this.handleChange2.bind(this)
  }
  componentDidMount() {
    this.getAllProjects();
  }
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
    this.setState({body: value})
  }
  render() {
    const { title, sub_1, sub_2, sub_3, body, cover_image } = this.state;
    return (
      <div className="ProjectAdmin">
        ProjectAdmin
        <div className="admin-outer-box">
          {this.state.projects.map(el => {
            return (
              <div className="admin-projects" key={el.project_id}>
                <div>
                  <img className="moto" src={el.cover_image} alt="" />
                </div>
                <h3>{el.title}</h3>
                <div>
                  <p>{el.sub_1}</p>
                  <p>{el.sub_2}</p>
                  <p>{el.sub_3}</p>
                </div>
                <section dangerouslySetInnerHTML={{ __html: el.body }}/>
                  <button onClick={() => this.props.history.push(`/admin/projects/edit/${el.project_id}`)}>Edit</button>
                <button
                  onClick={() => {
                    this.deleteProject(el.project_id);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
        
        <div>
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
          <ReactQuill value={this.state.body} onChange={this.handleChange2} />
          <input
            value={this.state.cover_image}
            onChange={e => this.handleChange(e)}
            type="text"
            placeholder="cover_image"
            name="cover_image"
          />
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
              this.setState({
                title: "",
                sub_1: "",
                sub_2: "",
                sub_3: "",
                body: "",
                cover_image: ""
              });
            }}
          >
            CREATE PROJECT
          </button>
        </div>
      </div>
    );
  }
}
