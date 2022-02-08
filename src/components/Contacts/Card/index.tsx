import React from 'react';
import Contact from '../../../models/contact';
import { Card as CardStyle } from './styles';

export const Card: React.FC<{ contact: Contact }> = ({ contact }) => {
    
    if (!contact.name || !contact.id) {
        return (
            <CardStyle >
                <p>Contato inválido</p>
            </CardStyle>
        );
    }
    return (
        <CardStyle>
            <p>{contact.name}</p>
        </CardStyle>
    );
};
