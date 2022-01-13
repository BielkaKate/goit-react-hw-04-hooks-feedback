import { useState } from "react";
import "./App.css";
import Section from "./components/Section/Section";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";
import propTypes from "prop-types";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onButtonClick = (e) => {
    const { name } = e.target;
    switch (name) {
      case "good":
        setGood((prevstate) => prevstate + 1);
        break;
      case "neutral":
        setNeutral((prevstate) => prevstate + 1);
        break;
      case "bad":
        setBad((prevstate) => prevstate + 1);
        break;
      default:
        console.log("Что-то пошло не так");
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / (good + neutral + bad)) * 100);
  };

  return (
    <div className="container">
      <Section title="Please, leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={onButtonClick}
        />
      </Section>

      <Section title="Statistics">
        {good || bad || neutral ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positive={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
};

export default App;

App.propTypes = {
  good: propTypes.number,
  neutral: propTypes.number,
  bad: propTypes.number,
};
