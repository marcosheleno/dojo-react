import { H2, NoDots } from '../../../../styles/styles';
import { Phone } from '../../contract';
import { Number } from '../styles';

const buildString = (phones: Phone[]) => {
    const emailsT = phones.map((phone: Phone) => {
        let type = ""
        let ddi: number;
        if(phone.type ){
            type = `(${phone.type})`
        }
        if(phone.ddi ){
            type = ` (${phone.type})`
        }
        return `${phone.email}${type}`;
    });
    const emailsString = emailsT.join(', ');
    return emailsString;
};

export const Phones: React.FC<{ phones?: Phone[] }> = ({ phones }) => {
    if (!phones || !phones.length) {
        return (
            <>
                <H2>Telefones</H2>
            </>
        );
    }
    
    return (
        <>
            <H2>Telefones</H2>
            {phones && (
                <NoDots>
                    {phones.map((phone) => {
                        return (
                            <Number key={phone.phone}>
                                {phone.type} +{phone.ddi} {phone.phone}
                            </Number>
                        );
                    })}
                </NoDots>
            )}
        </>
    );
};
