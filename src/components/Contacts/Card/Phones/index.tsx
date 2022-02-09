import { H2, NoDots, OverflowedParagraph } from "../../../../styles/styles";
import { Phone } from "../../contract";
import { Number } from "../styles";

export const Phones: React.FC<{ phones?: Phone[] }> = ({ phones }) => {
  if (!phones || !phones.length) {
    return <H2>Telefones</H2>;
  }
  return (
    <>
      <H2>Telefones</H2>;
      {phones && (
        <NoDots>
          {phones.map((phone) => {
            return (
              <Number key = {phone.phone}>
                {phone.type} +{phone.ddi} {phone.phone}
              </Number>
            );
          })}
        </NoDots>
      )}
    </>
  );
};
