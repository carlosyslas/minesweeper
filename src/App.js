import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Board from "./game/board";
import Home from "./home";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/game" component={Board} />
            <Route exact path="/menu" component={Home} />
            <Board />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
