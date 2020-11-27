import React from 'react';
import dialogCss from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

let newMessageElement = React.createRef();

let addMessage = () => {
    let text2 = newMessageElement.current.value;
    alert (text2)
}

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs
        .map( d => <DialogItem name={d.name} id={d.id} /> );

    let messagesElements = props.state.messages
        .map( m => <Message mes={m.message}/> );

    return (
        <div className={dialogCss.dialogs}>
            <div className={dialogCss.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={dialogCss.messages}>
                {messagesElements}
                <div>
                    <textarea ref={ newMessageElement }></textarea>
                </div>
                <div>
                    <button onClick={ addMessage }>Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;