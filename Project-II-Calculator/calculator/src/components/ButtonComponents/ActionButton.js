import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return <button className="action">{props.action}</button>
}

export default ActionButton;