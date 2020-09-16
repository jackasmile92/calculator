import React from 'react';
import CalculatorButtons from './CalculatorButtons/CalculatorButtons';

const Calculator = (props) =>{debugger;
    return(
      
        <div>
        tell me why!
        <div>
          <textarea placeholder='=0' value={props.state.calculatorData.expression}/>
        </div>
        
        <CalculatorButtons state={props.state} dispatch = {props.dispatch}/>
        </div>
    );
}

export default Calculator;