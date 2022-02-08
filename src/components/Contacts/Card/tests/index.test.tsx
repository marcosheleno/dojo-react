import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact, {Phone} from '../../../../models/contact';
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

it('PhoneWrapper should be empty if there is no phone numbers', () => {
    const mockContact: Contact = { id: 1, name: 'Contato teste' };

    render(<Card contact={mockContact} />);
    
    const phonesParent = screen.getByText('Telefones').parentElement;
    expect(phonesParent?.childElementCount).toBeLessThan(2);
});

it('PhoneWrapper must contain phone numbers when they exist', () => {
    const mockPhone: Phone = {ddi: 55, phone: 19999999999, type: 'celular'};
    const mockContact: Contact = { id: 1, name: 'Contato teste', phones: [
        mockPhone
    ] };

    render(<Card contact={mockContact} />);
    
    const contact1 = screen.getByText('celular +55 19999999999');
    expect(contact1).toBeInTheDocument();
});
