import * as React from "react";
import logo from "../logo.svg";
import "./App.css";

const Can: any = "Can";
export class App extends React.Component {
  state = {
    counter: 0
  };
  onClick = () => {
    console.log("onClick");
    this.setState({ counter: this.state.counter + 1 });
  };
  componentDidMount() {
    this.setState({ counter: this.state.counter + 1 });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p style={{ color: this.state.counter % 2 === 0 ? "red" : "white" }}>
            Edit <code> src/App.tsx</code> and save to reload.{" "}
            {this.state.counter}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {""}
            Learn React
          </a>
          <br />
          <div style={{ marginTop: 20 }} onClick={this.onClick}>
            {this.state.counter}
          </div>
          {this.state.counter === 2 && "Hii"}
          <br />
        </header>
      </div>
    );
  }
}

export default App;
