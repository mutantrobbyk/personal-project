import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from 'axios'
import {connect} from 'react-redux'
import {setUser} from '../../ducks/reducer'
import "./Nav.css";

class Nav extends Component {
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
  componentDidMount() {
    axios.get("/auth/currentuser").then(res => {
      this.props.setUser(res.data);
    });
  }
  render() {
    return (
      <div className="Nav">
        <div onClick={this.hide} className='syndicate_lion'>
        <img  src='https://res.cloudinary.com/datcltouj/image/upload/v1566926793/xupuooj60ihaop22wvbk.png'
        alt=''
        onClick={this.goHome}></img>
        </div>
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
              <li onClick={this.hide}>Shop Talk</li>
            </Link>
            <Link to='/about'>
              <li onClick={this.hide}>About</li>
            </Link>
            <Link to='/'>
              <li onClick={this.hide}>Home</li>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, {setUser})(withRouter(Nav))