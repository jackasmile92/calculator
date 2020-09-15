import React from 'react';
import ActionButtons from './ActionButtons/ActionButtons';
import NumberButtons from './NumberButtons/NumberButtons';

const CalculatorButtons = (props) => {
    return (
        <div>
            <ActionButtons/>
            <NumberButtons buttonsData={props.state.calculatorData}/>
        </div>
    );
}


export default CalculatorButtons;