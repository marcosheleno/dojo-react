import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Phones } from '..';
import { Phone } from '../../../contract';

describe('Invalid Phones', () => {
    it('if component doesnt receive any phones', () => {
        render(<Phones />);

        const groupsParent = screen.getByText('Telefones').parentElement;

        expect(groupsParent?.childElementCount).toBeLessThan(2);
    });
    it('if component receives a phone with no ddi property', () => {
        const mockPhones:Phone[] = [
            {
                type: 'comercial',
                phone: 19999999999
            }
        ]
        
        render(<Phones phones={mockPhones}/>);

        const groupsParent = screen.getByText('Telefones').parentElement;

        expect(groupsParent?.childElementCount).toBeLessThan(2);
    });
});

// describe('Valid Phones', () => {
//     it('if component receives a single group', () => {
//         const mockGroups: string[] = [
//             'casa'
//         ];

//         render(<Group group={mockGroups} />);

//         const group = screen.getByText('casa');

//         expect(group).toBeInTheDocument();
//     });

//     it('if component receives more than one group', () => {
//         const mockGroups: string[] = [
//             'casa',
//             'trabalho'
//         ];

//         render(<Group group={mockGroups} />);

//         const groups = screen.getByText(
//             'casa, trabalho'
//         );

//         expect(groups).toBeInTheDocument();
//     });
// });
