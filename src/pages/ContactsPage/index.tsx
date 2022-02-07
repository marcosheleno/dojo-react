import React from 'react';

import { Card, Number, PhoneWrapper, ContentWraper, LeftWraper } from './styles';
import { Column, Paragraph, H1, H2, NoDots, OverflowedParagraph } from '../../styles/styles';

const mockData = [
    {
        id: 10,
        nome: 'Abominável Homem das Neves',
        grupos: [
            'familia neves',
            'familia neves',
            'familia neves',
            'familia neves',
            'familia neves',
            'familia neves',
            'familia neves',
            'familia neves',
            'familia neves',
            'familia neves',
            'familia neves',
            'familia neves',
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

export default function ContactsPage() {
    return mockData.length > 0 ? (
        <>
            <section>
                {mockData.map((contact) => {
                    let groupsString = contact.grupos.join(', ');
            

                    return (
                        <Card>
                            <H1>{contact.nome}</H1>
                            <ContentWraper>
                                <LeftWraper>
                                    {contact.grupos.length > 0 ? (
                                        <div>
                                            <H2>Grupos</H2>
                                            <Paragraph>
                                                {
                                                    groupsString
                                                }
                                            </Paragraph>
                                        </div>
                                    ) : (
                                        <></>
                                    )}

                                    <div>
                                        <H2>Emails</H2>
                                        <OverflowedParagraph>
                                            ahsuhsuh@gmail.com,
                                            mail@example.com
                                        </OverflowedParagraph>
                                    </div>
                                </LeftWraper>
                                <PhoneWrapper>
                                    <H2>Telefones</H2>
                                    <NoDots>
                                        <Number>
                                            residencial: +55 191919191
                                        </Number>
                                        <Number>celular: +55 191919191</Number>
                                    </NoDots>
                                </PhoneWrapper>
                            </ContentWraper>
                        </Card>
                    );
                })}
            </section>
        </>
    ) : (
        <>
            <p>Nenhum contato encontrado</p>
        </>
    );
}
