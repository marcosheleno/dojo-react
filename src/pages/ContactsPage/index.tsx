import React from 'react';

import { Card, Number, PhoneWrapper, ContentWraper } from './styles';
import { Column, Paragraph, H1, H2 } from '../../styles/styles';

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
                            <ul>
                                <Number>residencial: +55 191919191</Number>
                                <Number>celular: +55 191919191</Number>
                            </ul>
                        </PhoneWrapper>
                    </ContentWraper>
                </Card>
            </section>
        </>
    );
}
