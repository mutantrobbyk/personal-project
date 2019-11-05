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
        <h2>Precision Engines</h2>
        <div className="engine-info">
          <div className="engine-list">
            <li>Dyno</li>
            <li>Ignition</li>
            <li>Mapping</li>
            <li>Valves</li>
            <li>Cams</li>
          </div>
          <div className="engine-pics">
            <img className='e_pic_1' src="https://res.cloudinary.com/datcltouj/image/upload/v1566969793/usgqk8ijaxfmz8nlzhes.jpg" alt="engine"/>
            <img className='e_pic_3' src="https://res.cloudinary.com/datcltouj/image/upload/v1566969498/qh8iszlwuou4csyusn9u.jpg" alt="engine"/>
            <img className='e_pic_4' src="https://res.cloudinary.com/datcltouj/image/upload/v1566969498/zhez5grlifejg4mf8nh0.jpg" alt="engine"/>
          </div>
        </div>
      </div>
    );
  }
}
