import React from 'react'
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


const Dialogs = (props) => {

    let addMessageArea = React.createRef();

    let addMessage = () => {
        let newMessage = addMessageArea.current.value;
        alert(newMessage);
    }

    let clearTextAreaBtn = () => {
        addMessageArea.current.value = '';
    }



    let dialogsElemnets = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = props.state.messages
        .map(m => <Message message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElemnets}

            </div>
            <div className={s.messages}>

                {messagesElements}
                <br />
                <div>
                <textarea className={s.addMessageTextArea} ref={addMessageArea}></textarea>
                </div>
                <div>
                    <button className={s.addMessageBtn} onClick={addMessage}>Add message</button>
                    <button className={s.clearTextAreaBtn} onClick={clearTextAreaBtn}>Clear</button>
                </div>

            </div>

        </div>
    )
}

export default Dialogs;