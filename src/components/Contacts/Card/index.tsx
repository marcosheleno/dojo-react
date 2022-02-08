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
                        <H2>group</H2>
                        <OverflowedParagraph>
                            Grupo 1, Grupo 2
                        </OverflowedParagraph>
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
                            <Number>celular: +55 191919191</Number>
                        </NoDots>
                    )}
                </PhoneWrapper>
            </ContentWraper>
        </CardStyle>
    );
};
