import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact, { Email, Phone } from '../../contract';
import { Card } from '..';

describe('Invalid contacts', () => {
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
});

describe('Valid contacts', () => {
    it('should present contact name when contact has only name and id', () => {
        const mockContact: Contact = { id: 1, name: 'Contato teste' };

        render(<Card contact={mockContact} />);

        const contacts = screen.getByText('Contato teste');
        expect(contacts).toBeInTheDocument();
    });

    describe('Missing data', () => {
        it('PhoneWrapper should be empty if contact has no phone numbers', () => {
            const mockContact: Contact = { id: 1, name: 'Contato teste' };

            render(<Card contact={mockContact} />);

            const phonesParent = screen.getByText('Telefones').parentElement;
            expect(phonesParent?.childElementCount).toBeLessThan(2);
        });

        it('Groups should be empty if contact has no groups', () => {
            const mockContact: Contact = { id: 1, name: 'Contato teste' };

            render(<Card contact={mockContact} />);

            const phonesParent = screen.getByText('Grupos').parentElement;

            expect(phonesParent?.childElementCount).toBeLessThan(2);
        });

        it('Emails should be empty if contact has no emails', () => {
            const mockContact: Contact = { id: 1, name: 'Contato teste' };

            render(<Card contact={mockContact} />);

            const phonesParent = screen.getByText('Emails').parentElement;
            expect(phonesParent?.childElementCount).toBeLessThan(2);
        });
    });

    describe('Existing data', () => {
        it('PhoneWrapper must contain phone numbers when they exist', () => {
            const mockPhone: Phone = {
                ddi: 55,
                phone: 19999999999,
                type: 'celular',
            };
            const mockContact: Contact = {
                id: 1,
                name: 'Contato teste',
                phones: [mockPhone],
            };

            render(<Card contact={mockContact} />);

            const contact1 = screen.getByText('celular +55 19999999999');
            expect(contact1).toBeInTheDocument();
        });

        it('LeftWrapper must contain comma separated groups when they exist', () => {
            const mockContact: Contact = {
                id: 1,
                name: 'Contato teste',
                group: ['familia', 'trabalho'],
            };

            render(<Card contact={mockContact} />);

            const contact1 = screen.getByText('familia, trabalho');
            expect(contact1).toBeInTheDocument();
        });

        it('LeftWrapper must contain comma separated emails when they exist', () => {
            const mockEmails: Email = {
                email: 'abominavel.homem.neves@familia.snow',
                type: 'comercial',
            };
            const mockContact: Contact = {
                id: 1,
                name: 'Contato teste',
                emails: [mockEmails],
            };

            render(<Card contact={mockContact} />);

            const contact1 = screen.getByText(
                'abominavel.homem.neves@familia.snow (comercial)'
            );
            expect(contact1).toBeInTheDocument();
        });
    });
});
