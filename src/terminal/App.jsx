import * as React from "react";
// import blessed from "blessed";
// import { render } from "react-blessed";
// Rendering a simple centered box
export default class App extends React.Component {
  state = {
    counter: 1
  };
  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  decrementCounter = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  render() {
    return (
      <blessed-box
        top={"center"}
        left="center"
        width="50%"
        height="50%"
        border={{ type: "line" }}
        style={{ border: { fg: "blue" } }}
      >
        <blessed-text>{"Hello World " + this.state.counter + "!"}</blessed-text>
        <blessed-button
          mouse
          border={{ type: "line" }}
          height={3}
          width={3}
          top={2}
          left={4}
          onPress={this.incrementCounter}
        >
          +
        </blessed-button>

        <blessed-button
          mouse
          border={{ type: "line" }}
          height={3}
          width={3}
          top={2}
          left={1}
          onPress={this.decrementCounter}
        >
          -
        </blessed-button>
      </blessed-box>
    );
  }
}
