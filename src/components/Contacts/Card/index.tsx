import React from 'react';
import Contact from '../../../models/contact';
import { H1, H2, NoDots, OverflowedParagraph } from '../../../styles/styles';
import {
    Card as CardStyle,
    ContentWraper,
    LeftWraper,
    PhoneWrapper,
    Number,
} from './styles';

// const getEmailString = (email: any) => `${email.email} (${email.tipo})`;

// const emails = contact.emails.map(getEmailString);
// const emailsString = emails.join(', ');


export const Card: React.FC<{ contact: Contact }> = ({ contact }) => {
    if (!contact.name || !contact.id) {
        return (
            <CardStyle>
                <p>Contato inválido</p>
            </CardStyle>
        );
    }

    return (
        <CardStyle>
            <H1>{contact.name}</H1>
            <ContentWraper>
                <LeftWraper>
                    (
                    <div>
                        <H2>Grupos</H2>
                        {contact.group && (
                            <OverflowedParagraph>
                                {contact.group.join(', ')}
                            </OverflowedParagraph>
                        )}
                    </div>
                    <div>
                        <H2>Emails</H2>
                        <OverflowedParagraph>Email 1</OverflowedParagraph>
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
