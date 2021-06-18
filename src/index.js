import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StateProvider } from "./StateProvider";
import reducer, { initialstate } from "./reducer";
import "tachyons";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialstate} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
