import React from 'react';
import dialogCss from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {
    let dialogsElements = props.dialogs
        .map( d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = props.messages
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