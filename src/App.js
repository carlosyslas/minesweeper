import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Game from "./game/Game";
import Home from "./home";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/game" component={Game} />
            <Route exact path="/menu" component={Home} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
