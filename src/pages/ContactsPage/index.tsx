import React from 'react';
import Contact from '../../components/Contacts/contract';

import {} from './styles';
import ContactsList from '../../components/Contacts';
import {default as contactsJson} from "../../data/contacts.json";

const mockContact: Contact[] = [{ id: 1, name: 'Contato teste' }];


export default function ContactsPage() {
    return <ContactsList contacts={mockContact} />;
}
