import { } from './styles';
import MessagesList from '../../components/Messages';
import MessageBox from '../../components/Messages/MessageBox';
import { useMessageList } from '../../components/Messages/behavior';
import { TMessage } from '../../components/Messages/contract';
import BackButton from '../../components/BackButton';

export default function MessagesPage({ contactId }: { contactId: number }) {
    const messages: Array<TMessage> = useMessageList(contactId);

    return (
        <>
            <BackButton />
            <MessagesList messages={messages} />
            <MessageBox />
        </>
    );
}
