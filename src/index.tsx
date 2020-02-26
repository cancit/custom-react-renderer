import React from "react";
// import ReactDOM from 'react-dom';
import CanDom from "./CanDom/renderer";
import BlessedWeb from "./BlessedWeb/renderer";

import "./index.css";
import App from "./components/App";
import TerminalApp from "./terminal/App";

import * as serviceWorker from "./serviceWorker";

CanDom.render(<App />, document.getElementById("root2"));

// BlessedWeb.render(<TerminalApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
