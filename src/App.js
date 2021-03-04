import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <h1>Espresso Cafe Stats</h1>
        <p>Leave your feedback</p>
        <button>Good</button>
        <button>Neutral</button>
        <button>Bad</button>
        <p>Stats</p>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </>
    );
  }
}

export default App;
