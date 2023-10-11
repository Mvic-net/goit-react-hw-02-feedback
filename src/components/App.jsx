import React from 'react';
import './Feedback.css';
import { Title } from './Title/Title';
import { Controls } from './Controls/Controls';
import { Statistics } from './Statistics/Statistics';
import { Analytics } from './Analytics/Analytics';
import { Notification } from './Notification/Notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlerClick = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercent = () => {
    if (this.countTotalFeedback() === 0) return 0;
    return ((this.state.good * 100) / this.countTotalFeedback()).toFixed(2);
  };

  render() {
    return (
      <div className="feedback-form-wrapper">
        <Title>Please leave feedback</Title>

        <Controls
          options={Object.keys(this.state)}
          handlerClick={this.handlerClick}
        />

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
        {this.countTotalFeedback() > 0 ? (
          <Analytics
            countTotalFeedback={this.countTotalFeedback()}
            countPositiveFeedbackPercent={this.countPositiveFeedbackPercent()}
          />
        ) : (
          <Notification>"There is no feedback"</Notification>
        )}

        {/* <h2>Statistics</h2>
        <ul>
          <li>
            <p>Good</p>
            <span>{this.state.good}</span>
          </li>
          <li>
            <p>Neutral</p>
            <span>{this.state.neutral}</span>
          </li>
          <li>
            <p>Bad</p>
            <span>{this.state.bad}</span>
          </li>
        </ul> */}
      </div>
    );
  }
}

export default App;
