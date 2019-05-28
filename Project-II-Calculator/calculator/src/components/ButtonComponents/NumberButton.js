import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return <button onClick={props.buttonHandler}>{props.number}</button>
}

export default NumberButton;