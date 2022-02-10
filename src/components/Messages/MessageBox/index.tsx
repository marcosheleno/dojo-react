import React, { useState } from 'react';
import { TMessage } from '../contract';

const MessageBox = () => {
    const [message, setMessage] = useState('');

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
    }

    const handleMessageChange = (event) => {
        setMessage(event.current.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea data-testid="message-box" value={message} onChange={(val) => {}}></textarea>
            <button data-testid="message-send">Enviar</button>
        </form>
    );
};

export default MessageBox;
