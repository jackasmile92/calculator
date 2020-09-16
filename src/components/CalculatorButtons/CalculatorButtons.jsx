import React from 'react';
import ActionButtons from './ActionButtons/ActionButtons';
import Button from './Button/Buttons';
import NumberButtons from './NumberButtons/NumberButtons';
import s from './CalculatorButtons.module.css';

const CalculatorButtons = (props) => {
    return (
        <div>
            <ActionButtons buttonsData={props.state.calculatorData} dispatch={props.dispatch} />
            <NumberButtons buttonsData={props.state.calculatorData} dispatch={props.dispatch} />
            <div  className ={s.number_buttons}>
                <Button type={'clear'} name={'clr'} dispatch={props.dispatch} />
                <Button type={'equal'} name={'='} dispatch={props.dispatch} />
            </div>
        </div>
    );
}


export default CalculatorButtons;