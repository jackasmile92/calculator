import React from 'react';
import CalculatorButtons from './CalculatorButtons/CalculatorButtons';

const Calculator = (props) =>{
    return(
        <div>
        tell me why!
        <div>
          <textarea placeholder='=0'/>
        </div>
        
        <CalculatorButtons state={props.state}/>
        </div>
    );
}

export default Calculator;