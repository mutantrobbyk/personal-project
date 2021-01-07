import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { setUser } from "../../ducks/reducer";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import "./Nav.css";

const styles = {
  button: {
    boxShadow: "none",
    height: "2rem",
    width: "2rem",
    background: "none",
  },
  menu_item: {
    backgroundColor: "rgb(36, 33, 33)",
    "&:hover": {
      backgroundColor: "rgb(219, 5, 5)",
    },
    opacity: 0.8,
  },
  menu_image: {
    fontSize: "2rem",
    color: "white",
    hover: "disable",
  },
  menu: {
    opacity: 0.8,
    "&:active": {
      outline: "none",
    },
  },
};

const StyledMenu = withStyles({
  paper: {
    borderTop: "2px solid red",
    outline: "none",
  },
  list: {
    outline: "none",
  },
})((props) => {
  return (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      {...props}
    />
  );
});
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
    const { anchorEl } = this.state;
    const { classes } = this.props;
    return (
      <div className="Nav">
        <div className="syndicate_lion">
          <img
            src="https://res.cloudinary.com/datcltouj/image/upload/v1566926793/xupuooj60ihaop22wvbk.png"
            alt=""
            onClick={this.goHome}
          ></img>
        </div>
        <Button
          aria-controls="customized-menu"
          aria-haspopup="true"
          onClick={this.handleClick}
          className={clsx(classes.button)}
        >
          <i className={clsx(classes.menu_image, "fas fa-bars")} />
        </Button>
        <StyledMenu
          className={clsx(classes.menu, "removeOutline")}
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem
            onClick={this.handleClose}
            className={clsx(classes.menu_item)}
          >
            <Link to="/services">
              <li>Services</li>
            </Link>
          </MenuItem>
          <MenuItem
            onClick={this.handleClose}
            className={clsx(classes.menu_item)}
          >
            <Link to="/projects">
              <li>Projects</li>
            </Link>
          </MenuItem>
          <MenuItem
            onClick={this.handleClose}
            className={clsx(classes.menu_item)}
          >
            <Link to="/techtips">
              <li>Shop Talk</li>
            </Link>
          </MenuItem>
          <MenuItem
            onClick={this.handleClose}
            className={clsx(classes.menu_item)}
          >
            <Link to="/about">
              <li>About</li>
            </Link>
          </MenuItem>
          <MenuItem
            onClick={this.handleClose}
            className={clsx(classes.menu_item)}
          >
            <Link to="/">
              <li>Home</li>
            </Link>
          </MenuItem>
        </StyledMenu>
      </div>
    );
  }
}

export default connect(null, { setUser })(withRouter(withStyles(styles)(Nav)));
