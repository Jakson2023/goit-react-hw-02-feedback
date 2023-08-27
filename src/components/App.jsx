import { Component } from "react";
import { Buttons, Counter } from "./feedback/Feedback.styled";
export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
    }

countUpdateState = (typeState) => {
  this.setState((prevState) => ({
      
        [typeState]: prevState[typeState]+1

}))

}

    handleClick =(typeState)=>{
     this.countUpdateState(typeState);
      
      }

countTotalFeedback = () => {
return this.state.good+this.state.neutral+this.state.bad
}

countPositiveFeedbackPercentage = () => {
  const totalFeedback = this.countTotalFeedback();
  if (totalFeedback === 0) {
    return 0;
  }
  return Math.round((this.state.good / totalFeedback) * 100);

}


  render(){
    return (
      <div>
          <h1>Please leave feedback</h1>
          <Buttons>
      <button onClick={() =>this.handleClick('good')}>Good</button>
      <button onClick={() =>this.handleClick('neutral')}>Neutral</button>
      <button onClick={() =>this.handleClick('bad')}>Bad</button>
      </Buttons>
      <h2>Statistics</h2>
      <Counter>
          <span>Good: {this.state.good}</span>
          <span>Neutral:{this.state.neutral}</span>
          <span>Bad:{this.state.bad}</span>
          <span>Total:{this.countTotalFeedback()}</span>
          <span>PositiveFeedback:{this.countPositiveFeedbackPercentage()}{`%`}</span>
      </Counter>
      
      </div>
      
      
      );
  }
};
