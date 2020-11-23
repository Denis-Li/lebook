import React from 'react';
import dialogCss from './../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={dialogCss.message}>{props.mes}</div>
    )

}

export default Message;