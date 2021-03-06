import React, { Component } from 'react';
import Section from './components/Section';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';

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
        <Section title="Espresso Cafe Stats">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.countFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
