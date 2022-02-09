import React from 'react';
import { TMessage } from '../Messages/contract';
import Message from './Message';

const MessagesList = ({ messages }: { messages?: TMessage[] }) => {
    if (!messages) {
        const message = {
            body: 'Oi, gostaria de falar uma coisa contigo!',
            date: new Date(),
        };
        messages = [message];
    }

    return (
        <>
            {messages.map((message) => {
                return (
                    <Message message={message} />
                );
            })}
        </>
    );
};

export default MessagesList;
