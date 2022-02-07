import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import Hello from "../Component"

it('should present a message when no name is set', () => {
  render(<Hello />);
  const welcomeComponent = screen.getByTestId(/welcome/i);

  expect(welcomeComponent).toBeInTheDocument();
  expect(welcomeComponent).toHaveTextContent('Hello, ');
  expect(welcomeComponent).toContainHTML('<h1 data-testid="welcome">Hello, !</h1>');
})

it('should present a greeting when name is set', () => {
  render(<Hello name="John Snow"/>);
  const welcomeComponent = screen.getByTestId(/welcome/i);

  expect(welcomeComponent).toBeInTheDocument();
  expect(welcomeComponent).toContainHTML('<h1 data-testid="welcome">Hello, John Snow!</h1>');
  expect(welcomeComponent).toHaveTextContent('Hello, John Snow');
})