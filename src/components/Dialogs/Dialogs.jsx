import React from 'react';
import dialogCss from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={dialogCss.dialog + ' ' + dialogCss.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={dialogCss.message}>{props.mes}</div>
    )

}


const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Den'},
        {id: 3, name: 'Andrey'},
        {id: 4, name: 'Katia'},
        {id: 5, name: 'Tom'}
    ]
    
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ]
    
    let dialogsElements = dialogs
        .map( d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = messages
        .map( m => <Message mes={m.message}/> );

    return (
        <div className={dialogCss.dialogs}>
            <div className={dialogCss.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={dialogCss.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;