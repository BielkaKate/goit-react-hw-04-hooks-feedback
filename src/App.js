import {Component} from "react";
import './App.css';
import Section from './components/Section/Section'
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions'
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";
import propTypes from "prop-types"

class App extends Component {
static propTypes = {
  good: propTypes.number,
  neutral: propTypes.number,
  bad: propTypes.number
}

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

onButtonClick = e => {
  const {name} = e.target;
this.setState(prevState => {
  return ({[name]: prevState[name] + 1 })   
})
  }

countTotalFeedback(){
  const {good, bad, neutral} = this.state
return(
  good + neutral + bad
)

}

countPositiveFeedbackPercentage(){
  const {good, bad, neutral} = this.state
return(
  Math.round(good / (good + neutral + bad) * 100)
)
}

  render(){
    const {good, bad, neutral} = this.state
    return (
      <div className="container">
      <Section title="Please, leave feedback">
        <FeedbackOptions 
        options = {['good', 'neutral', 'bad']}
        onLeaveFeedback={this.onButtonClick}/>
      </Section>

<Section title="Statistics">

{good || bad || neutral ? (

<Statistics
good={good}
neutral={neutral}
bad={bad}
total = {this.countTotalFeedback()}
positive = {this.countPositiveFeedbackPercentage()}
/>
) : (
  <Notification message="No feedback given" />
)
}


         </Section>
      </div>
    )
  }
}

export default App;
