import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TMessage } from '../../../components/Messages/contract';
import MessagesList from '../../../components/Messages';
import MessageBox from '../../../components/Messages/MessageBox';
import { Provider } from 'react-redux';
import store from '../../../store/store';
import MessagesPage from '..';

let mockMessages: TMessage[] = [];

jest.mock('../../../components/Messages/behavior', () => ({
    useMessageList: () => [
        {
            body: 'Oi, gostaria de falar uma coisa contigo!',
            date: new Date(),
        },
    ] 
}));

describe('when no messages are available', () => {
    describe('MessagesPage', () => {
        it('show page with default message', () => {
            const mockContactId = 5;

            render(
                <Provider store={store}>
                    <MessagesPage contactId={mockContactId} />
                </Provider>
            );

            const noMessages = screen.getByText(
                'Oi, gostaria de falar uma coisa contigo!'
            );
            expect(noMessages).toBeInTheDocument();
        });
    });

});


