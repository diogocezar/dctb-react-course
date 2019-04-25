import React, { Component } from "react";

class Clock extends Component {
  state = {
    now: null
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ now: new Date().toLocaleTimeString() });
    }, 1000);
  }

  render() {
    return <h1>{this.state.now}</h1>;
  }
}

export default Clock;
