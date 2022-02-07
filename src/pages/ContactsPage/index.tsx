import React from "react";

import {Card, Title, FamilyGroup, Number}  from './styles'

export default function ContactsPage() {
  return (
    <>
        <section>
            <Card>
                <Title>Fulano de Tal</Title>
                <FamilyGroup>Família</FamilyGroup>
                <Number>+55 191919191 (residencial)</Number>
            </Card>
            <Card>
                <Title>Fulano de Tal</Title>
                <FamilyGroup>Família</FamilyGroup>
                <Number>+55 191919191 (residencial)</Number>
            </Card>
            <Card>
                <Title>Fulano de Tal</Title>
                <Number>Família</Number>
                <Number>+55 191919191 (residencial)</Number>
            </Card>
        </section>
    </>
  );
}