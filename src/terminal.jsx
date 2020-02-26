import * as React from "react";
import blessed from "blessed";
import { render } from "react-blessed";
import App from "./terminal/App";

// Creating our screen
const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: "react-blessed hello world"
});

// Adding a way to quit the program
screen.key(["escape", "q", "C-c"], function(ch, key) {
  return process.exit(0);
});

// Rendering the React app using our screen
const component = render(<App />, screen);
