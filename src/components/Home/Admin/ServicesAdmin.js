import React from "react";
import { connect } from "react-redux";
import { clearUserInfo } from "../../../ducks/reducer";
import "./ServicesAdmin.css";
import axios from "axios";

class ServicesAdmin extends React.Component {
  constructor() {
    super();
    this.state = {
      headline: "",
    };
  }

  componentDidMount() {
    this.checkSession();
    this.getServicesHeadline();
  }
  checkSession = () => {
    axios.get("/auth/currentuser").then((res) => {
      if (res.data.message === "No User On Session") {
        this.props.clearUserInfo();
        this.checkAdmin();
      }
    });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  getServicesHeadline = () => {
    axios.get("/api/services/headline").then((result) => {
      this.setState({
        headline: result.data[0].headline,
      });
    });
  };
  updateServicesHeadline = () => {
    axios
      .put("/api/services/headline", { newHeadline: this.state.headline })
      .then((result) => {
        alert("Successful Update!");
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
    return (
      <div className="services-admin">
        <h4>Services Admin</h4>
        <div className="services-headline">
          <h4>Update Headline</h4>
          <textarea
            type="text"
            placeholder="New headline here"
            className="services-headline-input"
            value={this.state.headline}
            name="headline"
            onChange={(e) => this.handleChange(e)}
          />
          <button onClick={() => this.updateServicesHeadline()}>Save Headline</button>
        </div>
      </div>
    );
  }
}
function mapStateToProps(Redux) {
  const { is_admin } = Redux;
  return { is_admin };
}
export default connect(mapStateToProps, { clearUserInfo })(ServicesAdmin);
