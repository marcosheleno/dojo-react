import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactsList from '../../../components/Contacts';

it('no contacts found', () => {
    render(<ContactsList />);
    const contacts = screen.getByTestId(/contacts/i);

    expect(contacts).toBeInTheDocument();
    expect(contacts).toHaveTextContent('Nenhum contato encontrado');
    // expect(contacts).toContainHTML('<h1 data-testid="nome">Ola, </h1>');
});

it('contact without id', () => {
    const mockData = [
        {
            nome: 'Abominável Homem das Neves',
            group: [
                'familia neves',
            ],
            emails: [
                {
                    email: 'abominavel.homem.neves@familia.snow',
                    tipo: 'comercial',
                },
            ],
            telefones: [
                {
                    numero: 54516885,
                    ddi: 55,
                    tipo: 'fax',
                },
            ],
        },
    ];

    render(<ContactsList />);
    const contacts = screen.getByTestId(/contacts/i);

    expect(contacts).toBeInTheDocument();
    expect(contacts).toHaveTextContent('Nenhum contato encontrado');
    // expect(contacts).toContainHTML('<h1 data-testid="nome">Ola, </h1>');
});

// contato sem id
// contato sem nome
