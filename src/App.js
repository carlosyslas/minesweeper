import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Board from "./board";
import Home from "./home";
import rootReducer from "./rootReducer";
import "./App.css";

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/game" component={Board} />
            <Route exact path="/" component={Home} />
            <Board />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
