import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Group } from '..';

describe('Invalid Groups', () => {
    it('if component doesnt receive any groups', () => {
        render(<Group />);

        const groupsParent = screen.getByText('Grupos').parentElement;

        expect(groupsParent?.childElementCount).toBeLessThan(2);
    });
});

describe('Valid Groups', () => {
    it('if component receives a single group', () => {
        const mockGroups: string[] = [
            'casa'
        ];

        render(<Group group={mockGroups} />);

        const group = screen.getByText('casa');

        expect(group).toBeInTheDocument();
    });

    it('if component receives more than one group', () => {
        const mockGroups: string[] = [
            'casa',
            'trabalho'
        ];

        render(<Group group={mockGroups} />);

        const groups = screen.getByText(
            'casa, trabalho'
        );

        expect(groups).toBeInTheDocument();
    });
});
