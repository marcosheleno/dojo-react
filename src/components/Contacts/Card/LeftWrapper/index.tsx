import contact from "../../../../models/contact";
import { H2, OverflowedParagraph } from "../../../../styles/styles";

export default function LeftWraper = ({group} : Group) => {
    return (
        {group.length > 0 ? (
            <div>
                <H2>group</H2>
                <OverflowedParagraph>
                    {groupsString}
                </OverflowedParagraph>
            </div>
        ) : (
            <></>
        )}
    
        {group.length > 0 ? (
            <div>
                <H2>Emails</H2>
                <OverflowedParagraph>
                    {emailsString}
                </OverflowedParagraph>
            </div>
        ) : (
            <></>
        )}
    );
};

