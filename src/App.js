import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Game from "./game/Game";
import Home from "./home";
import rootReducer from "./rootReducer";
import NavBar from "./NavBar";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/game" component={Game} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
