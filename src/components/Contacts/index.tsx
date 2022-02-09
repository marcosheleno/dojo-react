import Contact from './contract';
import { Card } from './Card';
import React from 'react';

const ContactsList = ({ contacts }: { contacts?: Contact[] }) => {
    if (!contacts || !contacts.length) {
        return (
            <div>
                <p data-testid="contacts">Nenhum contato encontrado</p>
            </div>
        );
    }

    return (
        <>
            {contacts.map((contact) => {
                return <Card contact={contact} key = {contact.id}></Card>;
            })}
        </>
    );
};

export default ContactsList;
