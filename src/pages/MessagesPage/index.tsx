import { } from './styles';
import MessagesList from '../../components/Messages';
import MessageBox from '../../components/Messages/MessageBox';
import { useMessageList } from '../../components/Messages/behavior';
import BackButton from '../../components/BackButton';
import { TMessage } from '../../components/Messages/contract';

export default function MessagesPage({ contactId }: { contactId: number }) {

    let messages: TMessage[] = useMessageList(contactId);

    return (
        <>
            <BackButton />
            <MessagesList messages={messages} />
            <MessageBox />
        </>
    );
}
