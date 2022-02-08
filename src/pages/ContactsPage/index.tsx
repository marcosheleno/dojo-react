import React from 'react';
import Contact from '../../models/contact';

import {
    Card,
    Number,
    PhoneWrapper,
    ContentWraper,
    LeftWraper,
} from './styles';
import {
    Column,
    Paragraph,
    H1,
    H2,
    NoDots,
    OverflowedParagraph,
} from '../../styles/styles';
import ContactsList from '../../components/Contacts';

const mockData = [
    {
        id: 10,
        nome: 'Abominável Homem das Neves',
        group: [
            'familia neves',
            'familia neves',
            'familia neves',
            'familia neves',
        ],
        emails: [
            {
                email: 'abominavel.homem.neves@familia.snow',
                tipo: 'comercial',
            },
            {
                email: 'abominavel.homem.neves@familia.snow',
                tipo: 'pessoal',
            },
            {
                email: 'abominavel.homem.neves@familia.snow',
                tipo: 'backup',
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

const getEmailString = (email: any) => `${email.email} (${email.tipo})`;

const getPhoneString = (phone: any) =>
    `${phone.tipo}: + ${phone.ddi} ${phone.numero}`;

export default function ContactsPage() {
    return <ContactsList></ContactsList>;
}
