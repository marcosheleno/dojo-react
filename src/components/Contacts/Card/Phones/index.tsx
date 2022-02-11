import { H2, NoDots } from "../../../../styles/styles";
import { Phone } from "../../contract";
import { Number } from "../styles";

const buildString = (phone: Phone) => {
  let type = "";
  let ddi = "";
  if (phone.type) {
    type = `${phone.type} `;
  }
  if (phone.ddi) {
    ddi = `+${phone.ddi} `;
  }
  return `${type}${ddi}${phone.phone}`;
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
            return <Number key={phone.phone}>{buildString(phone)}</Number>;
          })}
        </NoDots>
      )}
    </>
  );
};
