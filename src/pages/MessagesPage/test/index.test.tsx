import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MessagesList from '../../../components/Messages';

describe('when no messages are available', () => {
    it('show a default message', () => {
        render(<MessagesList />);
        const noMessages = screen.getByTestId(/no-messages/i);

        expect(noMessages).toBeInTheDocument();
        expect(noMessages).toHaveTextContent(
            'Oi, gostaria de falar uma coisa contigo!'
        );
    });
});

describe('when messages are available, show them', () => {
    it('has a single message', () => {
        const mockMessages = ['Bom dia João!'];

        render(<MessagesList messages={mockMessages} />);
        const message = screen.getByText('Bom dia João!');

        expect(message).toBeInTheDocument();
    });
});
