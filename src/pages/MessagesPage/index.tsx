import React, { useEffect } from 'react';

import { } from './styles';
import MessagesList from '../../components/Messages';
import MessageBox from '../../components/Messages/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { useMessageList } from '../../components/Messages/behavior';
import { TMessage } from '../../components/Messages/contract';
import { updatePage } from '../../store/contacts/pageActions';

export default function MessagesPage({ contactId }: { contactId: number }) {
    const messages: Array<TMessage> = useMessageList(contactId);

    const dispatch = useDispatch();
    const handleGoBack = () => {
        dispatch(updatePage(0));
    };

    return (
        <>
            <button onClick={handleGoBack}>Voltar</button>
            <MessagesList messages={messages} />
            <MessageBox />
        </>
    );
}
