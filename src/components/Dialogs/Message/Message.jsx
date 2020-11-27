import React from 'react';
import dialogCss from './../Dialogs.module.css';


const Message = (props) => {
    return (
        <div>
            <div className={dialogCss.message}>{props.mes}</div>
        </div>
    )

}

export default Message;