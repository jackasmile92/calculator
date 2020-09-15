import React from 'react';
import s from './Button.module.css';

const Button = (props) => {
    return (
        <div className={s.button_small}>
           <button>{props.name}</button>
        </div>
    );
}


export default Button;