import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Phones } from "..";
import { Phone } from "../../../contract";

describe("Invalid Phones", () => {
  it("if component doesnt receive any phones", () => {
    render(<Phones />);

    const groupsParent = screen.getByText("Telefones").parentElement;

    expect(groupsParent?.childElementCount).toBeLessThan(2);
  });
  
  it("if component receives a phone object with only phone property", () => {
    const mockPhones: Phone[] = [
      {
        phone: 19999999999,
      },
    ];

    render(<Phones phones={mockPhones} />);

    const phone = screen.getByText("19999999999");
    expect(phone).toBeInTheDocument();
  });
  
  it("if component receives a phone with no ddi property", () => {
    const mockPhones: Phone[] = [
      {
        type: "comercial",
        phone: 19999999999,
      },
    ];

    render(<Phones phones={mockPhones} />);

    const phone = screen.getByText("comercial 19999999999");
    expect(phone).toBeInTheDocument();
  });
  it("if component receives a phone with no type property", () => {
    const mockPhones: Phone[] = [
      {
        ddi: 55,
        phone: 19999999999,
      },
    ];

    render(<Phones phones={mockPhones} />);

    const phone = screen.getByText("+55 19999999999");
    expect(phone).toBeInTheDocument();
  });
});

describe('Valid Phones', () => {
    it('if component receives a single complete phone object', () => {
        const mockPhones: Phone[] = [
            {
              phone: 19999999999,
              ddi: 55,
              type: "comercial"
            },
          ];

        render(<Phones phones={mockPhones} />);

        const phone = screen.getByText('comercial +55 19999999999');

        expect(phone).toBeInTheDocument();
    });

    it('if component receives more than one complete phone', () => {
        const mockPhones: Phone[] = [
            {
              phone: 19999999999,
              ddi: 55,
              type: "comercial"
            },
            {
                phone: 99999999999,
                ddi: 44,
                type: "residencial"
              },
          ];

        render(<Phones phones={mockPhones} />);

        const phone1 = screen.getByText('comercial +55 19999999999');

        expect(phone1).toBeInTheDocument();
        
        const phone2 = screen.getByText('residencial +44 99999999999');

        expect(phone2).toBeInTheDocument();
    });
});
