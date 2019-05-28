import React from 'react';
import './Display.css';

import Display from './Display';
import NumberButtons from '../ButtonComponents/NumberButtons';
import Operations from '../ButtonComponents/Operations';

const CalculatorDisplay = () => {
    return(
        <div className="calculator">
        <Display />
        <div className="area">
          <NumberButtons />
          <Operations /> 
          

        </div>
    </div>
    )
}

export default CalculatorDisplay;