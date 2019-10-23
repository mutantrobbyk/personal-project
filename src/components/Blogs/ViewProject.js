import React, { Component } from "react";
import axios from "axios";
import "./ViewProject.css";

export default class ViewProject extends Component {
  state = {
    title: "",
    sub_1: "",
    sub_2: "",
    sub_3: "",
    body: "",
    cover_image: "",
    images: []
  };
  hide () {
    const drop = document.getElementById('dropdown')
    if (!drop.classList.contains('hide')) {
        drop.classList.add('hide')
    }
}
  componentDidMount() {
    this.getProject();
    console.log(this.images);
  }
  getProject = () => {
    axios
      .get(`/blog/getAllProjects/${this.props.match.params.project_id}`)
      .then(async res => {
        console.log(res.data);
        // eslint-disable-next-line
        let newArray = await res.data.map(el => {
          console.log(el);
          if (el.image !== "" && el.image !== null) {
            return { image: el.image, id: el.id };
          }
        });
        console.log(newArray.length);
        this.setState({
          project_id: res.data[0].project_id,
          title: res.data[0].title,
          sub_1: res.data[0].sub_1,
          sub_2: res.data[0].sub_2,
          sub_3: res.data[0].sub_3,
          body: res.data[0].body,
          cover_image: res.data[0].cover_image,
          images: newArray
        });
      });
  };
  goBack = () => {
    this.props.history.push("/projects");
  };
  render() {
    let { title, sub_1, sub_2, sub_3, body, cover_image, images } = this.state;
    return (
      <div onClick={this.hide} className="outer_box">
        <div className="inner_box">
          <div className="third_box">
            <div className="title">
              <div classname="main_pic">
                <img className="jbro" src={cover_image} alt="" />
              </div>
              <div className="project_info">
                <div>
                  <h1>{title}</h1>
                  <div>
                    <p>Year: {sub_1}</p>
                    <p>Make: {sub_2}</p>
                    <p>Model: {sub_3}</p>
                  </div>
                </div>
                <div>
                  <button onClick={() => this.goBack()}>
                    BACK TO PROJECTS
                  </button>
                </div>
              </div>
            </div>
            <hr className="project_hr" />
            <div className="blog_content">
              <section
                className="section"
                dangerouslySetInnerHTML={{ __html: body }}
              />
            </div>
            <div className="bottom_pictures">
              <div>
                {images.map(el => {
                  return (
                    <div>
                      <img className="more_pics" src={el.image} alt="" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
