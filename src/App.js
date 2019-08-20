import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import routes from "./routes";
import { withRouter } from "react-router-dom";
import axios from 'axios'
import {setUser} from '../src/ducks/reducer'
import {connect} from 'react-redux'

class App extends Component {
  componentDidMount() {
    axios.get('/auth/currentuser').then(res => {
      this.props.setUser(res.data)
    })
  }
  render() {
    return (
      <div className="App">
        <Nav history={this.props.history} />
        <div className='nav_offset'></div>
        {routes}
      </div>
    );
  }
}

export default connect(null, {setUser})(withRouter(App));
