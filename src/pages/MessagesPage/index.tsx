import React from 'react';

import {} from './styles';
import MessagesList from '../../components/Messages';
import MessageBox from '../../components/Messages/MessageBox';
import { TReducers } from '../../store/reducers';
import { useSelector } from 'react-redux';

export default function MessagesPage({contactId}: {contactId: number}) {
    return (
        <>
            <MessagesList/>
            <MessageBox />
        </>
    );
}
