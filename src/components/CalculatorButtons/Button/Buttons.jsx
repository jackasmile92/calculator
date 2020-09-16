import React from 'react';
import s from './Button.module.css';
import { updateExpressionCreater } from '../../../redux/calculatorReducer';

const Button = (props) => {
    let onButtonClick = () => {
        props.dispatch(updateExpressionCreater(props.name) );
      };

    return (
        <div className={s.button_small}>
           <button onClick={onButtonClick}>{props.name}</button>
        </div>
    );
}


export default Button;