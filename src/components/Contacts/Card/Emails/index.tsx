import { H2, OverflowedParagraph } from '../../../../styles/styles';
import { Email } from '../../contract';

const buildString = (emails: Email[]) => {
    const emailsT = emails.map((email: Email) => {
        let type = ""
        if(email.type ){
            type = ` (${email.type})`
        }
        return `${email.email}${type}`;
    });
    const emailsString = emailsT.join(', ');
    return emailsString;
};

export const Emails: React.FC<{ emails?: Email[] }> = ({ emails }) => {
    if (!emails || !emails.length) {
        return (
            <>
                <H2>Emails</H2>
            </>
        );
    }
    return (
        <>
            <H2>Emails</H2>
            <OverflowedParagraph>{buildString(emails)}</OverflowedParagraph>
        </>
    );
};
