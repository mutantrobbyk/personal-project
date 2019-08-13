import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default class Nav extends Component {
  dropdown () {
    const drop = document.getElementById("dropdown");
    if (drop.classList.contains("hide")) {
      drop.classList.remove("hide");
    } else {
      drop.classList.add("hide");
    }
  };
  hide () {
      const drop = document.getElementById('dropdown')
      if (!drop.classList.contains('hide')) {
          drop.classList.add('hide')
      }
  }
  goHome = () => {
    this.props.history.push('/')
  }
  render() {
    return (
      <div className="Nav">
        <h1 onClick={this.goHome}>Logo</h1>
        <i onClick={this.dropdown} className="fas fa-bars" />
        <div id="dropdown" className="dropdown hide">
          <div className="container">
            <Link to='/engine'>
              <li onClick={this.hide}>Engine</li>
            </Link>
            <Link to='/suspension'>
              <li onClick={this.hide}>Suspension</li>
            </Link>
            <Link to='/projects'>
              <li onClick={this.hide}>Projects</li>
            </Link>
            <Link to='/techtips'>
              <li onClick={this.hide}>Tech Tips</li>
            </Link>
            <Link to='/about'>
              <li onClick={this.hide}>About</li>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
