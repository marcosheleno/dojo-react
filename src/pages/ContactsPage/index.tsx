import React from "react";

import { Card, Title, FamilyGroup, Number, PhoneWrapper, ContentWraper, Email } from "./styles";

export default function ContactsPage() {
  return (
    <>
      <section>
        <Card>
          <Title>Fulano de Tal</Title>
          <ContentWraper>
            <div>
              Grupos
              <p>
                <FamilyGroup>Família</FamilyGroup>
              </p>
            </div>
            <div>
                Emails
                <p>
                    <Email>ahsuhsuh@gmail.com</Email>
                </p>
            </div>
            <PhoneWrapper>
              <Number>+55 191919191 (residencial)</Number>
            </PhoneWrapper>
          </ContentWraper>
        </Card>
        
      </section>
    </>
  );
}
