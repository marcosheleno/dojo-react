import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TMessage } from '../../../components/Messages/contract';
import MessagesList from '../../../components/Messages';
import MessageBox from '../../../components/Messages/MessageBox';
import { Provider } from 'react-redux';
import store from '../../../store/store';
import MessagesPage from '..';

describe('when no messages are available', () => {
    describe('MessagesPage', () => {
        it('show page with default message', () => {
            const mockContactId = 5;
            let mockMessages: TMessage[] = [
                {
                    body: 'Oi, gostaria de falar uma coisa contigo!',
                    date: new Date(),
                },
            ];

            jest.mock('../../../components/Messages/behavior', () => {
                return jest.fn(() => ({
                    messages: mockMessages,
                }));
            });

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

    describe('MessagesList', () => {
        it('show a default message', () => {
            const emptyMessage: TMessage[] = [
                {
                    body: 'Oi, gostaria de falar uma coisa contigo!',
                    date: new Date(),
                },
            ];
            render(
                <Provider store={store}>
                    <MessagesList messages={emptyMessage} />
                </Provider>
            );

            const noMessages = screen.getByText(
                'Oi, gostaria de falar uma coisa contigo!'
            );
            expect(noMessages).toBeInTheDocument();
        });
    });
});

describe('when messages are available, show them', () => {
    it('has a single message', () => {
        const mockMessage: TMessage = { body: 'Boa tarde!', date: new Date() };
        const mockMessages = [mockMessage];

        render(<MessagesList messages={mockMessages} />);
        const message = screen.getByText('Boa tarde!');

        expect(message).toBeInTheDocument();
    });
});

describe('send messages', () => {
    it('send a test message', () => {
        const messageText = 'Testando o campo';

        render(
            <Provider store={store}>
                <MessageBox />
            </Provider>
        );

        const inputField = screen.getByTestId('message-box');
        fireEvent.change(inputField, { target: { value: messageText } });
        const sendButton = screen.getByTestId('message-send');
        fireEvent.click(sendButton);
    });
});
