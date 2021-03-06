import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  registerFeedback = event => {
    const { id } = event.target;
    this.setState(prevState => ({
      [id]: prevState[id] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <h1>Espresso Cafe Stats</h1>
        <p>Leave your feedback</p>
        <button id="good" onClick={this.registerFeedback}>
          Good
        </button>
        <button id="neutral" onClick={this.registerFeedback}>
          Neutral
        </button>
        <button id="bad" onClick={this.registerFeedback}>
          Bad
        </button>
        <p>Stats</p>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </>
    );
  }
}

export default App;
