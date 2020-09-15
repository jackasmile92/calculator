import React from 'react';
import Button from '../Button/Buttons';
import s from './NumberButtons.module.css';

const NumberButtons = (props) => {
    let buttonNames = props.buttonsData.NumberButtons;
    let buttonElements = buttonNames.reverse().map(b =>  <Button name ={b.name}/> )

    return (
        <div className ={s.number_buttons}>
           {buttonElements}
        </div>
    );
}


export default NumberButtons;