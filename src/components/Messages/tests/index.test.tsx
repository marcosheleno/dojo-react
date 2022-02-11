import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TMessage } from '../contract';
import { Provider } from 'react-redux';
import MessagesList from '..';
import store from '../../../store/store';

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

describe('when messages are available, show them', () => {
    it('has a single message', () => {
        const mockMessage: TMessage = { body: 'Boa tarde!', date: new Date() };
        const mockMessages = [mockMessage];

        render(<MessagesList messages={mockMessages} />);
        const message = screen.getByText('Boa tarde!');

        expect(message).toBeInTheDocument();
    });
});