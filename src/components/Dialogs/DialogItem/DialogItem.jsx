import React from 'react';
import dialogCss from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={dialogCss.dialog + ' ' + dialogCss.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;