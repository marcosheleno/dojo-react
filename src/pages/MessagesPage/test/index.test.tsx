import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TMessage } from '../../../components/Messages/contract';
import MessagesList from '../../../components/Messages';
import MessageBox from '../../../components/Messages/MessageBox';
import { Provider } from 'react-redux';

describe('when no messages are available', () => {
    it('show a default message', () => {
        render(<MessagesList messages={[]} />);
        const noMessages = screen.getByText(
            'Oi, gostaria de falar uma coisa contigo!'
        );
        expect(noMessages).toBeInTheDocument();
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
