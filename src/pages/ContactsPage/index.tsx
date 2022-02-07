import React from "react";

import {Card, Title, FamilyGroup, Number, ListWrapper}  from './styles'

export default function ContactsPage() {
  return (
    <>
        <section>
            <Card>
                <Title>Fulano de Tal</Title>
                <ListWrapper>
                    Grupos
                    <ul>
                        <FamilyGroup>Família</FamilyGroup>
                    </ul>
                </ListWrapper>
                <ListWrapper>
                    <Number>+55 191919191 (residencial)</Number>
                </ListWrapper>
            </Card>
            <Card>
                <Title>Fulano de Tal</Title>
                <ListWrapper>
                    Grupos
                    <ul>
                        <FamilyGroup>Família</FamilyGroup>
                    </ul>
                </ListWrapper>
                <Number>+55 191919191 (residencial)</Number>
            </Card>
            <Card>
                <Title>Fulano de Tal</Title>
                <ListWrapper>
                    Grupos
                    <ul>
                        <FamilyGroup>Família</FamilyGroup>
                        <FamilyGroup>Amigos</FamilyGroup>
                    </ul>
                </ListWrapper>
                <Number>+55 191919191 (residencial)</Number>
            </Card>
        </section>
    </>
  );
}