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

    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Den'},
        {id: 3, name: 'Andrey'},
        {id: 4, name: 'Katia'},
        {id: 5, name: 'Tom'}
    ]
    let messagesData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Den'},
        {id: 3, name: 'Andrey'},
        {id: 4, name: 'Katia'},
        {id: 5, name: 'Tom'}
    ]

    return (
        <div className={dialogCss.dialogs}>
            <div className={dialogCss.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name="Andrey" id="3" />
                <DialogItem name="Katia" id="4" />
                <DialogItem name="Tom" id="5" />
            </div>
            <div className={dialogCss.messages}>
                <Message mes="Hi"/>
                <Message mes="How are you?"/>
                <Message mes="Yo"/>
                <Message mes="Yo"/>
                <Message mes="Yo"/>
            </div>
        </div>
    )
}

export default Dialogs;