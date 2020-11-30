import React from 'react';
import dialogCss from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

let newMessageElement = React.createRef();

let addMessage = () => {
    let text2 = newMessageElement.current.value;
    alert (text2)
}

let onMessageChange = () => {

}

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs
        .map( d => <DialogItem name={d.name} id={d.id} /> );

    let messagesElements = props.dialogsPage.messages
        .map( m => <Message mes={m.message}/> );

    return (
        <div className={dialogCss.dialogs}>
            <div className={dialogCss.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={dialogCss.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onMessageChange} ref={ newMessageElement } value={props.newMessageText} />
                </div>
                <div>
                    <button onClick={ addMessage }>Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;