import { group } from 'console';
import React from 'react';
import Contact from '../contract';
import { H1, H2, NoDots, OverflowedParagraph } from '../../../styles/styles';
import { Group } from './Group';
import {
    Card as CardStyle,
    ContentWraper,
    LeftWraper,
    PhoneWrapper,
    Number,
} from './styles';

const tratamento = (emails: any) => {
    const emailsT = emails.map((email: any) => {
        return `${email.email} (${email.tipo})`;
    });
    const emailsString = emailsT.join(', ');
    return emailsString;
};

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
    return (
        <CardStyle>
            <H1>{contact.name}</H1>
            <ContentWraper>
                <LeftWraper>
                    <div>
                        <Group group={grupo}></Group>
                    </div>
                    <div>
                        <H2>Emails</H2>
                        {contact.emails && (
                            <OverflowedParagraph>
                                {tratamento(contact.emails)}
                            </OverflowedParagraph>
                        )}
                    </div>
                </LeftWraper>
                <PhoneWrapper>
                    <H2>Telefones</H2>
                    {contact.phones && (
                        <NoDots>
                            {contact.phones.map((phone) => {
                                return (
                                    <Number>
                                        {phone.type} +{phone.ddi} {phone.phone}
                                    </Number>
                                );
                            })}
                        </NoDots>
                    )}
                </PhoneWrapper>
            </ContentWraper>
        </CardStyle>
    );
};
