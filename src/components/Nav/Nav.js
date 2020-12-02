import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { setUser } from "../../ducks/reducer";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import "./Nav.css";

class Nav extends Component {
  state = {
    anchorEl: null,
  };

  handleClick = (e) => {
    this.setState({
      anchorEl: e.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  goHome = () => {
    this.props.history.push("/");
  };

  componentDidMount() {
    axios.get("/auth/currentuser").then((res) => {
      this.props.setUser(res.data);
    });
  }

  render() {
    const {anchorEl} = this.state
    return (
      <div className="Nav">
        <div onClick={this.hide} className="syndicate_lion">
          <img
            src="https://res.cloudinary.com/datcltouj/image/upload/v1566926793/xupuooj60ihaop22wvbk.png"
            alt=""
            onClick={this.goHome}
          ></img>
        </div>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <i className="fas fa-bars" />
        </Button>
        <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={this.handleClose}>
          <MenuItem><Link to="/services">
              <li>Services</li>
            </Link></MenuItem>
          <MenuItem><Link to="/projects">
              <li>Projects</li>
            </Link></MenuItem>
          <MenuItem><Link to="/techtips">
              <li>Shop Talk</li>
            </Link></MenuItem>
          <MenuItem><Link to="/about">
              <li>About</li>
            </Link></MenuItem>
          <MenuItem><Link to="/">
              <li>Home</li>
            </Link></MenuItem>
        </Menu>
      </div>
    );
  }
}

export default connect(null, { setUser })(withRouter(Nav));
