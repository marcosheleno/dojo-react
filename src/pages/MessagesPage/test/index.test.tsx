import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MessagesList from '../../../components/Messages';

describe('when no messages are available', () => {
    it('show a default message', () => {
        render(<MessagesList />);
        const noMessages = screen.getByText('Oi, gostaria de falar uma coisa contigo!');
        expect(noMessages).toBeInTheDocument();
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
