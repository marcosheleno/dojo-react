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

export default function ContactsPage(mockData?:Array<Contact>) {
    
    if(!mockData || !mockData.length){
        return <div>Sem contatos</div>
    }
    
    return mockData ? (
        <>
            <section>
                {mockData.map((contact) => {
                    const emails = contact.emails.map(getEmailString);

                    const groupsString = contact.group.join(', ');
                    const emailsString = emails.join(', ');

                    return (
                        <Card>
                            <H1 data-testid = "nome">Ola, {contact.name}</H1>
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

                                        <Number>
                                            
                                        </Number>
                                        <Number>celular: +55 191919191</Number>
                                    </NoDots>
                                </PhoneWrapper>
                            </ContentWraper>
                        </Card>
                    );
                })}
                asasass
            </section>
        </>
    ) : (
        <>
            <p>Nenhum contato encontrado</p>
        </>
    );
}
