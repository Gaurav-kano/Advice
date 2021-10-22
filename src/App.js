import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = { advice: "" };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        // console.log(advice);
        this.setState({ advice: advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { advice } = this.state;

    return (
      <div className="position">
        <div class="card">
          <h1>{advice} </h1>
          <button class="glow-on-hover" onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
