import React from "react";
import "./Button.css";
import NumberButton from "./NumberButton";
import ActionButton from "./ActionButton";

const NumberButtons = props => {
  const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1];

  return (
    <div className="numbers">
      <ActionButton clearHandler={props.clearHandler} buttonStyle="action" action="clear" />
      {numbers.map(num => (
        <NumberButton
          number={num}
          key={num}
          buttonHandler={props.buttonHandler}
        />
      ))}
      <ActionButton buttonStyle="action" action="0" />
    </div>
  );
};

export default NumberButtons;
