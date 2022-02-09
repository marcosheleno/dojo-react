import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactsList from '../../../components/Contacts';
import Contact from '../../../components/Contacts/contract'

it('when no contacts are provided, present "Nenhum contato encontrado" error', () => {
    render(<ContactsList />);
    const contacts = screen.getByTestId(/contacts/i);

    expect(contacts).toBeInTheDocument();
    expect(contacts).toHaveTextContent('Nenhum contato encontrado');
    expect(contacts).toContainHTML('<p data-testid="contacts">Nenhum contato encontrado</p>');
});

it('should present a message when contact has no id', () => {
  const mockContact:Contact = {name: 'Teste'};

    const mockData = [
      mockContact
    ];

    render(<ContactsList contacts={mockData} />);

    const contacts = screen.getByText('Contato inválido');
    const parent = screen.getByText('Contato inválido').parentElement;
    
    expect(contacts).toBeInTheDocument();
    expect(parent?.tagName).toBe("ARTICLE")
});

it('should present a message when contact has no name', () => {

  const mockContact:Contact = {id: 1};

    const mockData = [
      mockContact
    ];

    render(<ContactsList contacts={mockData} />);
    
    const contacts = screen.getByText('Contato inválido');
    const parent = screen.getByText('Contato inválido').parentElement;
    expect(contacts).toBeInTheDocument();
    
    expect(parent?.tagName).toBe("ARTICLE")
});

it('should present a message when contact has only name and id', () => {

  const mockContact:Contact = {id: 1, name: "Contato teste"};

    const mockData = [
      mockContact
    ];

    render(<ContactsList contacts={mockData} />);
    
    const contacts = screen.getByText('Contato teste');
    expect(contacts).toBeInTheDocument();
});

it('should present a list of 2 contacts', () => {

  const mockContact1:Contact = {id: 1, name: "Contato teste"};
  const mockContact2:Contact = {id: 2, name: "Chico Cunha"};

    const mockData = [
      mockContact1,
      mockContact2,
    ];

    render(<ContactsList contacts={mockData} />);
    
    const contact1 = screen.getByText('Contato teste');
    expect(contact1).toBeInTheDocument();
    
    const contact2 = screen.getByText('Chico Cunha');
    expect(contact2).toBeInTheDocument();
});
