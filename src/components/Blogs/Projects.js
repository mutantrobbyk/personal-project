import React, { Component } from "react";
import "./Projects.css";
import axios from "axios";

export default class Projects extends Component {
  state = {
    projects: [],
  };
  componentDidMount() {
    this.getAllProjects();
  }
  getAllProjects = () => {
    axios.get("/blog/getAllProjects").then((res) => {
      this.setState({
        projects: res.data,
      });
    });
  };
  
  
  render() {
    const projectDisplay = this.state.projects.map((el) => {
      return (
        <div
          onClick={() =>
            this.props.history.push(
              `/projects/viewproject/${el.project_id}`
            )
          }
          className="projects_container"
        >
          <div className="proj-container" key={el.project_id}>
            <img src={el.cover_image} alt="" />
            <h3>{el.title}</h3>
            <div className="details">
              <p>Year: {el.sub_1}</p>
              <p>Make: {el.sub_2}</p>
              <p>Model: {el.sub_3}</p>
            </div>
          </div>
        </div>
      );
    })
    const noProjects = <div className="empty-blog">Great Project Content Coming Soon</div>
    return (
      <div className="Projects">
        <div className="projects_head">
          <div className="rob-pic"/>
          <h1>PROJECTS.</h1>
        </div>
        {this.state.projects.length > 0 ? projectDisplay : noProjects}
      </div>
    );
  }
}
