import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
// import MainImage from '../images/m45a2849.jpg'
import Spring from "../images/noun_suspension_378329.png";
import Piston from "../images/noun_Piston_103816 (1).png";
import Pic from "../images/noun_Photo_1827280 (1).png";
import Wrench from "../images/noun_Wrench_2558227 (1).png";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="main_image">
          <div className="mainPageImages" />
          <h1 className="SD">SYNDICATE DEVELOPMENT</h1>
          <p className="sub_1">Performance, Passion, Precision.</p>
          <Link to="/projects">
            <p className="project_gallery">PROJECT GALLERY</p>
          </Link>
        </div>
        <hr />
        <div className="mission_container">
          <h1 className="mission_statement">
            DREAM IT. BUILD IT. RIDE IT. LOVE IT.
          </h1>
          <h4 className="tagline">
            <b>
              SPECIALIZING IN CUSTOM PERFORMANCE MOTOCROSS AND SUPERCROSS
              MOTORCYCLES
            </b>
          </h4>
          <p className="description">
          From simple upgrades to full race ready bikes, Syndicate Development is here to cater to all of your motorcycle needs.  With state of the art equipment and a performance dyno room, we are here to get your machine performing better than you even thought possible.  We specialize in custom suspension, engine performance, and ECU tuning, but we also offer things from regular services to full race prep. Give us a call or send us a message and let us know what we can do for you!
          </p>
        </div>
        <hr />
        <div className="icons">
          <Link to="/engine">
            <div className="icon_pic">
              <img src={Piston} alt="Piston" />
              <h3>ENGINE</h3>
            </div>
          </Link>
          <Link to="/suspension">
            <div className="icon_pic">
              <img src={Spring} alt="Suspension" />
              <h3>SUSPENSION</h3>
            </div>
          </Link>
          <Link to="/projects">
            <div className="icon_pic">
              <img src={Pic} alt="Icon" />
              <h3>PROJECTS</h3>
            </div>
          </Link>
          <Link to="/techtips">
            <div className="icon_pic">
              <img src={Wrench} alt="Wrench" />
              <h3>SHOP TALK</h3>
            </div>
          </Link>
        </div>
        <hr/>
        <div className="contact">
          <div className="mainPageImages_1"   />
          <h1>READY TO START BUILDING?</h1>
          <Link to="/about">
            <p>CONTACT THE SHOP</p>
          </Link>
        </div>
        <Link to="/auth">
          <p>Admin</p>
        </Link>
      </div>
    );
  }
}
