import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';

const Operations = () => {
    return (
        <div className="operations">
            <ActionButton operator="&divide;"/>
            <ActionButton operator="&times;"/> 
            <ActionButton operator="&minus;"/> 
            <ActionButton operator="&#43;"/> 
            <ActionButton operator="&#61;"/> 
 
        </div>
    )
}

export default Operations;