import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';

const NumberButtons = () => {
    const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1];
    return (
        <div className="numbers">
            <ActionButton action="clear"/>
            {numbers.map(num => <NumberButton number={num} />)}
            <ActionButton action="0"></ActionButton>
        </div>
    )
}

export default NumberButtons;