import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import routes from "./routes";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import {persistor} from './store'
import { PersistGate } from "redux-persist/integration/react";

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HashRouter>
            <div className="App">
              <Nav />
              <div className="nav_offset"></div>
              {routes}
            </div>
          </HashRouter>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
