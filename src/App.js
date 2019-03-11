import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Board from "./board";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Board />
      </Provider>
    );
  }
}

export default App;
