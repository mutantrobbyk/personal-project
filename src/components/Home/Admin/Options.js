import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { clearUserInfo } from "../../../ducks/reducer";

class Options extends Component {

  componentDidMount() {
    this.checkSession();
  }

  checkSession = () => {
    axios.get("/auth/currentuser").then((res) => {
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
  render(){
      return(
          <div>
              <h3>Website Options</h3>
              <hr/>
              <div>
              <h4>Subtitle</h4>
              <textarea name="" id="" cols="30" rows="10"></textarea>  
              </div>
          </div>
      )
  }
}

function mapStateToProps(Redux) {
  const { is_admin } = Redux;
  return { is_admin };
}
export default connect(mapStateToProps, { clearUserInfo })(Options);
 