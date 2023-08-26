import { Component } from "react";
import { Buttons, Counter } from "./Feedback.styled";

export class Feedback extends Component {

state = {
good: 0,
neutral: 0,
bad: 0
}

handleClickGood =()=>{
this.setState(prevState => {
    return {
        good: prevState.good+1
    }
})

}
handleClickNeutral =()=>{
    this.setState(prevState => {
        return {
            neutral: prevState.neutral+1
        }
    })
    
    }
    handleClickBad =()=>{
this.setState(prevState => {
    return {
        bad: prevState.bad+1
    }
})

}



render() {

return (
<div>
    <h1>Please leave feedback</h1>
    <Buttons>
<button onClick={this.handleClickGood}>Good</button>
<button onClick={this.handleClickNeutral}>Neutral</button>
<button onClick={this.handleClickBad}>Bad</button>
</Buttons>
<h2>Statistics</h2>
<Counter>
    <span>Good: {this.state.good}</span>
    <span>Neutral:{this.state.neutral}</span>
    <span>Bad:{this.state.bad}</span>
</Counter>

</div>


);




}



}