import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import routes from "./routes";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { setUser } from "../src/ducks/reducer";
import { connect } from "react-redux";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  componentDidMount() {
    axios.get("/auth/currentuser").then(res => {
      this.props.setUser(res.data);
    });
  }
  render() {
    return (
      <HashRouter>
        <Provider store={store}>
          <div className="App">
            <Nav history={this.props.history} />
            <div className="nav_offset"></div>
            {routes}
          </div>
        </Provider>
      </HashRouter>
    );
  }
}

export default connect(null, { setUser })(withRouter(App));
