import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Emails } from '..';

//casos de teste:
describe('Invalid Emails', () => {
    // sem emails
    it('if component doesnt receive any e-mail', () => {
        render(<Emails />);

        const emailsParent = screen.getByText('Emails').parentElement;

        expect(emailsParent?.childElementCount).toBeLessThan(2);

    });
    // email incompleto (sem tipo)
    it('if component receives an email with no type property', () => {
        const mockEmails = [
            email: ''
        ]

        render(<Emails />);

        const emailsParent = screen.getByText('Emails').parentElement;

        expect(emailsParent?.childElementCount).toBeLessThan(2);

    });
    // email em formato invalido
});

describe('Valid Emails', () => {});
// caminho feliz (tudo certo)