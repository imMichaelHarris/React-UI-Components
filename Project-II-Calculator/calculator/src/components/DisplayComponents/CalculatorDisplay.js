import React from "react";
import "./Display.css";

import Display from "./Display";
import NumberButtons from "../ButtonComponents/NumberButtons";
import Operations from "../ButtonComponents/Operations";

class CalculatorDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        numbersPressed: 0
    }
  }

  clearHandler = (event) => {
    this.setState({
        numbersPressed: 0
    })
  }
  buttonHandler = (event) => {
    console.dir(event.target.textContent);
    if(this.state.numbersPressed === 0){
        this.setState({
            numbersPressed: event.target.textContent,
        })
    } else {
        this.setState({
            numbersPressed: this.state.numbersPressed + event.target.textContent,
        })
    }

  }

  render() {
      console.log(this.buttonHandler);
    return (
      <div className="calculator">
        <Display text={this.state.numbersPressed}/>
        <div className="area">
          <NumberButtons clearHandler={this.clearHandler} buttonHandler={this.buttonHandler} />
          <Operations />
        </div>
      </div>
    );
  }
}

export default CalculatorDisplay;
