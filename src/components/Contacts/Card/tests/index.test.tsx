import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from '../../../../models/contact';
import { Card } from '..';

it('should present a message when contact has no id', () => {
    const mockContact: Contact = { name: 'Teste' };

    render(<Card contact={mockContact} />);

    const contact = screen.getByText('Contato inválido');
    expect(contact).toBeInTheDocument();
});

it('should present a message when contact has no name', () => {
    const mockContact: Contact = { id: 1 };
    
    
    render(<Card contact={mockContact} />);
    const contact = screen.getByText('Contato inválido');
    expect(contact).toBeInTheDocument();
});

it('should present a message when contact has only name and id', () => {
    const mockContact: Contact = { id: 1, name: 'Contato teste' };

    render(<Card contact={mockContact} />);
    
    const contacts = screen.getByText('Contato teste');
    expect(contacts).toBeInTheDocument();
    
});
