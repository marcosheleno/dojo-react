import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import ContactsPage from "..";
import Contact from '../../../models/contact'

it('should present a message when no name is set', () => {
  render(<ContactsPage />);
  const welcomeComponent = screen.getByTestId(/nome/i);

  expect(welcomeComponent).toBeInTheDocument();
  expect(welcomeComponent).toHaveTextContent('Ola, ');
  expect(welcomeComponent).toContainHTML('<h1 data-testid="nome">Ola, </h1>');
})

