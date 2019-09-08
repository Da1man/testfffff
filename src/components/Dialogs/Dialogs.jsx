import React from 'react'
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {updateNewMessageBodyCeator, sendMessageCreator} from '../../Redux/state'


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let addMessageArea = React.createRef();

    let clearTextAreaBtn = () => { addMessageArea.current.value = ''; };

    let onSendMessageClick = () => { props.store.dispatch(sendMessageCreator())};

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCeator(body));
    } 



    let dialogsElemnets = state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = state.messages
        .map(m => <Message message={m.message} />);

    let newMessageBody = state.newMessageBody;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElemnets}

            </div>
            <div className={s.messages}>

                {messagesElements}
                <br />
                <div>
                <textarea className={s.addMessageTextArea}
                            ref={addMessageArea}
                            placeholder='Enter your message'
                            value ={ newMessageBody }
                            onChange={ onNewMessageChange }></textarea>
                </div>
                <div>
                    <button className={s.addMessageBtn} onClick={onSendMessageClick}>Add message</button>
                    <button className={s.clearTextAreaBtn} onClick={clearTextAreaBtn}>Clear</button>
                </div>
                

            </div>

        </div>
    )
}

export default Dialogs;