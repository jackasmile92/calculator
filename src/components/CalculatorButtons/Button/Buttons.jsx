import React from 'react';
import s from './Button.module.css';
import { actionButtonPressed, clearTextaresCreater, deletePreviousSymbol, solveButtonPressed, updateExpressionCreater } from '../../../redux/calculatorReducer';

const Button = (props) => {
    let onButtonClick = () => {
        if (props.type === 'number') {
            props.dispatch(updateExpressionCreater(props.name));
        }
        if (props.type === 'clear'){
            props.dispatch(clearTextaresCreater());
        }
        if (props.type === 'action'){
            props.dispatch(actionButtonPressed(props.name));
        }
        if (props.type === 'equal'){
            props.dispatch(solveButtonPressed());
        }
        if(props.type === 'delLast'){
            props.dispatch(deletePreviousSymbol());
        }
    };

    return (
        <div className={s.button_small}>
            <button onClick={onButtonClick}>{props.name}</button>
        </div>
    );
}


export default Button;