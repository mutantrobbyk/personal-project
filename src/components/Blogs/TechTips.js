import React, { Component } from "react";
import "./TechTips.css";
import axios from "axios";

export default class TechTips extends Component {
  state = {
    tips: [],
  };
  componentDidMount() {
    this.getAllTips();
  }
  getAllTips = () => {
    axios.get("/tips/getAllTips").then((res) => {
      this.setState({
        tips: res.data,
      });
    });
  };
  render() {
    return (
      <div className="TechTips">
        <div className="tips_head">
          <div className="top-image" />
          <h1>SHOP TALK.</h1>
        </div>
        {this.state.tips.map((el) => {
          return (
            <div
              onClick={() =>
                this.props.history.push(`/techtips/viewtip/${el.tip_id}`)
              }
              className="tips_container"
            >
              <div>
                <img src={el.url} alt="" />
                <h5>{el.category}</h5>
                <h3>{el.title}</h3>
              </div>
            </div>
          );
        })}
        Great content coming soon.
      </div>
    );
  }
}
