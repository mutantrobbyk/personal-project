import React, { Component } from "react";
import "./AdminLanding.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {clearUserInfo} from '../../../ducks/reducer'

class AdminLanding extends Component {
  userLogout = () => {
    axios.delete("/auth/logout").then(() => {
      console.log("Logged out");
      this.props.history.push("/");
    });
  };
  hide() {
    const drop = document.getElementById("dropdown");
    if (!drop.classList.contains("hide")) {
      drop.classList.add("hide");
    }
  }
  componentDidMount() {
    this.checkSession()
  }
  checkSession = () => {
    axios.get('/auth/currentuser').then(res => {
      console.log(res.data)
      if (res.data.message === "No User On Session"){
        this.props.clearUserInfo()
        this.checkAdmin()
      }
    })
  }
  componentDidUpdate() {
    this.checkSession()
    this.checkAdmin();
  }
  checkAdmin = () => {
    if (!this.props.is_admin) {
      this.props.history.push(`/auth`);
    }
  };
  render() {
    return (
      <div onClick={this.hide} className="AdminLanding">
        {this.checkAdmin()}
        <br />
        <Link to="/admin/projects">
          <h3 className="h3">Update Projects</h3>
        </Link>
        <Link to="/admin/tech">
          <h3 className="h3">Update Tech Tips</h3>
        </Link>
        <Link to="/services-admin">
          <h3 className="h3">Update Services Page</h3>
        </Link>
        <button onClick={this.userLogout}>LOGOUT</button>
      </div>
    );
  }
}
function mapStateToProps(Redux) {
  const { is_admin } = Redux;
  return { is_admin };
}
export default connect(mapStateToProps, {clearUserInfo})(AdminLanding);
