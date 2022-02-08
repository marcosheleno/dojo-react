import React from 'react';
import Contact from '../../../models/contact';
import { H1, H2, NoDots, OverflowedParagraph } from '../../../styles/styles';
import { Card as CardStyle, ContentWraper, LeftWraper, PhoneWrapper, Number } from './styles';

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
                    {contact.group.length > 0 ? (
                        <div>
                            <H2>group</H2>
                            <OverflowedParagraph>
                                {groupsString}
                            </OverflowedParagraph>
                        </div>
                    ) : (
                        <></>
                    )}
                    {contact.group.length > 0 ? (
                        <div>
                            <H2>Emails</H2>
                            <OverflowedParagraph>
                                {emailsString}
                            </OverflowedParagraph>
                        </div>
                    ) : (
                        <></>
                    )}
                </LeftWraper>
                <PhoneWrapper>
                    <H2>Telefones</H2>
                    <NoDots>
                        <Number>celular: +55 191919191</Number>
                    </NoDots>
                </PhoneWrapper>
            </ContentWraper>
        </CardStyle>
    );
};
