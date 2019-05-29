import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return <button onClick={props.clearHandler}className={props.buttonStyle}>{props.action}</button>
}

export default ActionButton;