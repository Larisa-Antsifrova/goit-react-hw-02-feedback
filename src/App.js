import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = event => {
    const { id } = event.target;
    this.setState(prevState => ({
      [id]: prevState[id] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value);
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback()
      ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
      : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <h1>Espresso Cafe Stats</h1>
        <p>Leave your feedback</p>
        <button id="good" onClick={this.countFeedback}>
          Good
        </button>
        <button id="neutral" onClick={this.countFeedback}>
          Neutral
        </button>
        <button id="bad" onClick={this.countFeedback}>
          Bad
        </button>
        <p>Stats</p>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
      </>
    );
  }
}

export default App;
