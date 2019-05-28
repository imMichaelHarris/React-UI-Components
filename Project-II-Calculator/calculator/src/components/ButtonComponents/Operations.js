import React from 'react';
import './Button.css';
import Operator from './Operator';

const Operations = () => {
    return (
        <div className="operations">
            <Operator operator="&divide;"/>
            <Operator operator="&times;"/> 
            <Operator operator="&minus;"/> 
            <Operator operator="&#43;"/> 
            <Operator operator="&#61;"/> 
        </div>
    )
}

export default Operations;