import { H2, OverflowedParagraph } from '../../../../styles/styles';

export const Phones: React.FC<{ group?: string[] }> = ({ group }) => {
    if (!group || !group.length) {
        return <H2>Telefones</H2>;
    }
    return (
        <>
            <H2>Telefones</H2>;
            
            <OverflowedParagraph>{group.join(', ')}</OverflowedParagraph>
        </>
    );
};
