import React, { Component } from "react";
import "./Suspension.css";

export default class Suspension extends Component {
  hide() {
    const drop = document.getElementById("dropdown");
    if (!drop.classList.contains("hide")) {
      drop.classList.add("hide");
    }
  }
  render() {
    return (
      <div className="Suspension_room" onClick={this.hide}>
        <br />
        <h2>Custom Suspension Setup</h2>
        <br />
        <div className="suspension-info">
          <div className="suspension-pics">
            <div className="s_pic_1" />
            <div className="s_pic_2" />
            <div className="s_pic_3" />
            <div className="s_pic_4" />
          </div>
          <div className="suspension-list">
            <li>Spring Rate</li>
            <li>Valving</li>
            <li>Conversion Systems</li>
            <li>Steering Damper</li>
            <li>Holeshot Device</li>
          </div>
        </div>
      </div>
    );
  }
}
