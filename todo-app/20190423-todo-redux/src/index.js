import React from "react";
import ReactDOM from "react-dom";
import TodoAppContainer from "./containers/TodoAppContainer";
import { Provider } from "react-redux";
import store from "./redux/store/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <TodoAppContainer />
  </Provider>,
  rootElement
);
