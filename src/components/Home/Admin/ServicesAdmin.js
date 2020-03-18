import React from "react";
import { connect } from "react-redux";
import { clearUserInfo } from "../../../ducks/reducer";
import "./ServicesAdmin.css";
import axios from 'axios'

class ServicesAdmin extends React.Component {
  componentDidMount() {
    this.checkSession();
  }
  checkSession = () => {
    axios.get("/auth/currentuser").then(res => {
      console.log(res.data);
      if (res.data.message === "No User On Session") {
        this.props.clearUserInfo();
        this.checkAdmin();
      }
    });
  };
  componentDidUpdate() {
    this.checkSession();
    this.checkAdmin();
  }
  checkAdmin = () => {
    if (!this.props.is_admin) {
      this.props.history.push(`/auth`);
    }
  };
  render() {
    console.log(this.props);
    return <div className="services-admin">Services Admin</div>;
  }
}
function mapStateToProps(Redux) {
  const { is_admin } = Redux;
  return { is_admin };
}
export default connect(mapStateToProps, { clearUserInfo })(ServicesAdmin);
