import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Emails } from "..";
import { Email } from "../../../contract";

//casos de teste:
describe("Invalid Emails", () => {
  // sem emails
  it("if component doesnt receive any e-mail", () => {
    render(<Emails />);

    const emailsParent = screen.getByText("Emails").parentElement;

    expect(emailsParent?.childElementCount).toBeLessThan(2);
  });
  // email incompleto (sem tipo)
  it("if component receives an email with no type property", () => {
    const mockEmails: Email[] = [
      {
        email: "abominavel.homem.neves@familia.snow",
      },
    ];

    render(<Emails emails={mockEmails} />);

    const emailsParent = screen.getByText(
      "abominavel.homem.neves@familia.snow"
    );

    expect(emailsParent).toBeInTheDocument();
  });
});

describe("Valid Emails", () => {
  it("if component receive an object with email and type", () => {
    const mockEmails: Email[] = [
      {
        email: "abominavel.homem.neves@familia.snow",
        type: "comercial",
      },
    ];

    render(<Emails emails={mockEmails} />);

    const emailsParent = screen.getByText(
      "abominavel.homem.neves@familia.snow (comercial)"
    );

    expect(emailsParent).toBeInTheDocument();
  });

  it("if component receive more than one object with email and type", () => {
    const mockEmails: Email[] = [
      {
        email: "abominavel.homem.neves@familia.snow",
        type: "comercial",
      },
      {
        email: "abominavel.mulher.neves@familia.snow",
        type: "residencial",
      },
    ];

    render(<Emails emails={mockEmails} />);

    const emailsParent = screen.getByText(
      "abominavel.homem.neves@familia.snow (comercial)"
    );

    expect(emailsParent).toBeInTheDocument();
  });
});
