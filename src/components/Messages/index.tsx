import React from 'react';

const MessagesList = ({ messages }: { messages?: String[] }) => {
    if (!messages) {
        return (
            <div>
                <p data-testid='no-messages'>
                    Oi, gostaria de falar uma coisa contigo!
                </p>
            </div>
        );
    }

    messages.map((message) => {
        return (
            <div>
                <p>{message}</p>
            </div>
        );
    });
};

export default MessagesList;
