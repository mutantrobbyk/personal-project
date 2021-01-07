import React, { Component } from "react";
import "./Suspension.css";

export default class Suspension extends Component {
  render() {
    return (
      <div className="Suspension_room">
        <br />
        <h2>Custom Suspension Setup</h2>
        <br />
        <div className="suspension-info">
          <div className="suspension-pics">
            <img
              className="s_pic_1"
              src="https://res.cloudinary.com/datcltouj/image/upload/v1566976096/go2r7lxyu07igy3rxhul.jpg"
            />
            <img
              className="s_pic_2"
              src="https://res.cloudinary.com/datcltouj/image/upload/v1566976115/wlmrvpmbo2svm0famqhh.jpg"
            />
            <img
              className="s_pic_3"
              src="https://res.cloudinary.com/datcltouj/image/upload/v1566918629/fmadjva61pmzoz6l83ei.jpg"
            />
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
