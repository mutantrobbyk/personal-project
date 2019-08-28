import React, { Component } from "react";
import "./Suspension.css";

export default class Suspension extends Component {
  render() {
    return (
      <div className="Suspension_room">
        <div className="Suspension">
          <div className="todd-pic" />
          <h1>SUSPENSION.</h1>
        </div>
        <br />
        <h2>Custom Suspension Setup</h2>
        <br/>
        <div className="suspension-info">
          <div className="suspension-list">
            <li>Spring Rate</li>
            <li>Valving</li>
            <li>Conversion Systems</li>
            <li>Steering Damper</li>
            <li>Holeshot Device</li>
          </div>
          <div className="suspension-pics">
            <div className="s_pic_1" />
            <div className="s_pic_2" />
            <div className="s_pic_3" />
            <div className="s_pic_4" />
          </div>
        </div>
      </div>
    );
  }
}
