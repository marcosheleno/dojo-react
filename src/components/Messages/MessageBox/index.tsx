import React from 'react';
import { TMessage } from '../contract';

const MessageBox = () => {
    return (
        <form>
            <textarea data-testid="message-box"></textarea>
            <button data-testid="message-send">Enviar</button>
        </form>
    );
};

export default MessageBox;
