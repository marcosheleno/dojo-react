import { group } from 'console';
import React from 'react';
import Contact, { Email, Phone } from '../contract';
import { H1, H2, NoDots, OverflowedParagraph } from '../../../styles/styles';
import { Group } from './Group';
import {
    Card as CardStyle,
    ContentWraper,
    LeftWraper,
    PhoneWrapper,
    Number,
} from './styles';
import { Emails } from './Emails';
import { Phones } from './Phones';
import { getId } from './behavior';



export const Card: React.FC<{ contact: Contact }> = ({ contact }) => {
    if (!contact.name || !contact.id) {
        return (
            <CardStyle>
                <p>Contato inválido</p>
            </CardStyle>
        );
    }

    let grupo: string[] = [];
    if (contact.group) {
        grupo = contact.group;
    }

    let emails: Email[] = [];
    if (contact.emails) {
        emails = contact.emails;
    }

    let phones: Phone[] = [];
    if (contact.phones) {
        phones = contact.phones;
    }

    let id: number = 0;
    if (contact.id) {
        id = contact.id
    }
    return (
        <CardStyle onClick={() => { getId(id) }}>
            <H1>{contact.name}</H1>
            <ContentWraper>
                <LeftWraper>
                    <div>
                        <Group group={grupo}></Group>
                    </div>
                    <div>
                        <Emails emails={emails} />
                    </div>
                </LeftWraper>
                <PhoneWrapper>
                    <Phones phones={phones}></Phones>
                </PhoneWrapper>
            </ContentWraper>
        </CardStyle>
    );
};
