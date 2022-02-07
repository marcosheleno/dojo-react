import React from 'react';

import { Card, Number, PhoneWrapper, ContentWraper } from './styles';
import { Column, Paragraph, H1, H2, NoDots } from '../../styles/styles';
import data from '../../../data/contacts.json'

console.log(data);

export default function ContactsPage() {
    return (
        <>
            <section>
                <Card>
                    <H1>Fulano de Tal</H1>
                    <ContentWraper>
                        <Column>
                            <div>
                                <H2>Grupos</H2>
                                <Paragraph>
                                    Família, amigos, parentes, vizinhos...
                                </Paragraph>
                            </div>
                            <div>
                                <H2>Emails</H2>
                                <Paragraph>
                                    ahsuhsuh@gmail.com, mail@example.com...
                                </Paragraph>
                            </div>
                        </Column>
                        <PhoneWrapper>
                            <H2>Telefones</H2>
                            <NoDots>
                                <Number>residencial: +55 191919191</Number>
                                <Number>celular: +55 191919191</Number>
                            </NoDots>
                        </PhoneWrapper>
                    </ContentWraper>
                </Card>
            </section>
        </>
    );
}
