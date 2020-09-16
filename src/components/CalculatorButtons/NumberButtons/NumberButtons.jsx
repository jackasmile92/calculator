import React from 'react';
import Button from '../Button/Buttons';
import s from './NumberButtons.module.css';

const NumberButtons = (props) => {
    let buttonNames = props.buttonsData.NumberButtons;
    let buttonElements = buttonNames.map(b =>  <Button name ={b.name} dispatch = {props.dispatch}/> )

    return (
        <div className ={s.number_buttons}>
           {buttonElements.reverse()}
        </div>
    );
}


export default NumberButtons;