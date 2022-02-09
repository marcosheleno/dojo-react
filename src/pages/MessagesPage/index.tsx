import React from 'react';

import {} from './styles';
import MessagesList from '../../components/Messages';
import MessageBox from '../../components/Messages/MessageBox';

export default function MessagesPage() {
    return (
        <>
            <MessagesList />
            <MessageBox />
        </>
    );
}
