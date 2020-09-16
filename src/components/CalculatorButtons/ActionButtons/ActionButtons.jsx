import React from 'react';
import Button from '../Button/Buttons';
import s from './ActionButtons.module.css';

const ActionButtons = (props) => {
    let buttonNames = props.buttonsData.ActionButtons;
    let buttonElements = buttonNames.map(b =>  <Button type ={'action'} name ={b.name} dispatch = {props.dispatch}/> )

    return (
        <div className ={s.number_buttons}>
           {buttonElements.reverse()}
        </div>
    );
}


export default ActionButtons;