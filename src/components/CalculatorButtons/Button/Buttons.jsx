import React from 'react';
import s from './Button.module.css';
import { clearTextaresCreater, updateExpressionCreater } from '../../../redux/calculatorReducer';

const Button = (props) => {
    let onButtonClick = () => {
        if (props.type === 'number') {
            props.dispatch(updateExpressionCreater(props.name));
        }
        if (props.type === 'clear'){
            props.dispatch(clearTextaresCreater());
        }
    };

    return (
        <div className={s.button_small}>
            <button onClick={onButtonClick}>{props.name}</button>
        </div>
    );
}


export default Button;