import React, { Component } from "react";
import "./TechAdmin.css";
import axios from "axios";

export default class TechAdmin extends Component {
  state = {
    tips: [],
    category: "",
    title: "",
    body: "",
    url: ""
  };
  componentDidMount() {
    this.getAllTips();
  }
  getAllTips = () => {
    axios.get("/tips/getAllTips").then(res => {
      this.setState({
        tips: res.data
      });
    });
  };
  createTip = body => {
    axios.post("/tips/createNewTips", body).then(res => {
      this.setState({
        tips: res.data
      });
    });
  };
  deleteTip = tip_id => {
    axios.delete(`/tips/${tip_id}`).then(res => {
      this.setState({
        tips: res.data
      });
    });
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { category, title, body, url } = this.state;
    return (
      <div className="TechAdmin">
        TechAdmin
        <div className="tips-outer-box">
          {this.state.tips.map(el => {
            return (
              <div className="admin-tips" key={el.tip_id}>
                <div>
                  <img className="tips-pic" src={el.url} alt="" />
                </div>
                <h5>{el.category}</h5>
                <h3>{el.title}</h3>
                <p>{el.body}</p>
                <button>EDIT</button>
                <button
                  onClick={() => {
                    this.deleteTip(el.tip_id);
                  }}
                >
                  DELETE
                </button>
              </div>
            );
          })}
        </div>
        <div>
          <input
            value={this.state.category}
            onChange={e => this.handleChange(e)}
            type="text"
            placeholder="category"
            name="category"
          />
          <input
            value={this.state.title}
            onChange={e => this.handleChange(e)}
            type="text"
            placeholder="title"
            name="title"
          />
          <input
            value={this.state.body}
            onChange={e => this.handleChange(e)}
            type="text"
            placeholder="body"
            name="body"
          />
          <input
            value={this.state.url}
            onChange={e => this.handleChange(e)}
            type="text"
            placeholder="url"
            name="url"
          />
          <button
            onClick={() => {
              this.createTip({ category, title, body, url });
              this.setState({
                category: "",
                title: "",
                body: "",
                url: ""
              });
            }}
          >
            CREATE TIP
          </button>
        </div>
      </div>
    );
  }
}
