import Contact from './contract';
import { Card } from './Card';
import React from 'react';

const ContactsList = ({ contacts }: { contacts?: Contact[] }) => {

    console.log(contacts)
    if (!contacts || !contacts.length) {
        return (
            <div>
                <p data-testid='contacts'>Nenhum contato encontrado</p>
            </div>
        );
    }

    return (
        <>
            {contacts.map((contact, index) => {
                return <Card contact={contact} key={index}></Card>;
            })}
        </>
    );
};

export default ContactsList;
