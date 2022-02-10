import { } from './styles';
import MessagesList from '../../components/Messages';
import MessageBox from '../../components/Messages/MessageBox';
import { useMessageList } from '../../components/Messages/behavior';
import { TMessage } from '../../components/Messages/contract';
import BackButton from '../../components/BackButton';
import { useEffect } from 'react';

export default function MessagesPage({ contactId }: { contactId: number }) {
    
    let messages: any = useMessageList(contactId);
    // let messages: any = [];
    
    // useEffect(() => {
    //     messages = useMessageList(contactId);

    // }, []);


    return (
        <>
            <BackButton />
            <MessagesList messages={messages} />
            <MessageBox />
        </>
    );
}
