import React, { Component } from "react";
import "./Engine.css";

export default class Engine extends Component {
  hide () {
    const drop = document.getElementById('dropdown')
    if (!drop.classList.contains('hide')) {
        drop.classList.add('hide')
    }
}
  render() {
    return (
      <div onClick={this.hide} className="Engine_room">
        <div className="Engine">
          <div className='matt-pic' />
          <h1>ENGINE.</h1>
        </div>
        <br />
        <h2>Precision Engine Tuning</h2>
        <div className="engine-info">
          <div className="engine-list">
            <li>Dyno</li>
            <li>Ignition</li>
            <li>Mapping</li>
            <li>Valves</li>
            <li>Cams</li>
          </div>
          <div className="engine-pics">
            <div className="e_pic_1" />
            <div className="e_pic_2" />
            <div className="e_pic_3" />
            <div className="e_pic_4" />
          </div>
        </div>
      </div>
    );
  }
}
