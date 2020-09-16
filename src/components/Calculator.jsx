import React from 'react';
import { updateExpressionFromTextaresCreater } from '../redux/calculatorReducer';
import CalculatorButtons from './CalculatorButtons/CalculatorButtons';

const Calculator = (props) => {
  let input_text;
  let newExp = React.createRef();
  let expression =props.state.calculatorData.wholeExpression + props.state.calculatorData.expression ;

  if (expression === '') { input_text = '' }
  else { input_text = '=' + expression; }

  let onExpChange = () => {
    let text = newExp.current.value;
    props.dispatch(updateExpressionFromTextaresCreater(text) );
  };

  return (

    <div>
      tell me why!
      <div>
        <textarea onChange={onExpChange} ref={newExp} placeholder='=0' value={input_text} />
      </div>

      <CalculatorButtons state={props.state} dispatch={props.dispatch} />
    </div>
  );
}

export default Calculator;