import React, { useState } from 'react';
import { addMessage } from '../behavior'
import { useDispatch, useSelector } from 'react-redux'
import { TReducers } from '../../../store/reducers';

const MessageBox = () => {
    const [messageText, setMessageText] = useState('');
    const currentId = useSelector((state: TReducers) => state.page.id);
    const dispatch = useDispatch();
    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        addMessage(currentId,messageText);
        setMessageText('');
    }

    const handleMessageChange = (event: any) => {
        setMessageText(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea data-testid="message-box" value={messageText} onChange={handleMessageChange}></textarea>
            <button data-testid="message-send">Enviar</button>
        </form>
    );
};

export default MessageBox;
