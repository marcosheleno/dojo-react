import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import Hello from "./Hello"

it('should present a message when no name is set', () => {
  render(<Hello />);
  const welcomeComponent = screen.getByTestId(/welcome/i);

  expect(welcomeComponent).toBeInTheDocument();
  expect(welcomeComponent).toHaveTextContent('Hello, stranger');
  expect(welcomeComponent).toContainHTML('<h1 data-testid="welcome">Hello, stranger!</h1>');
})

it('should present a greeting when name is set', () => {
  render(<Hello name="John Snow"/>);
  const welcomeComponent = screen.getByTestId(/welcome/i);

  expect(welcomeComponent).toBeInTheDocument();
  expect(welcomeComponent).toContainHTML('<h1 data-testid="welcome">Hello, John Snow!</h1>');
  expect(welcomeComponent).toHaveTextContent('Hello, John Snow');
})

it('should change stranger to batata text on click', () => {
  render(<Hello />);
  const welcomeComponent = screen.getByTestId(/welcome/i);

  welcomeComponent.click()

  expect(welcomeComponent).toBeInTheDocument();
  expect(welcomeComponent).toHaveTextContent('Hello, batata');
  expect(welcomeComponent).toContainHTML('<h1 data-testid="welcome">Hello, batata!</h1>');
})

it('should not change name to batata on click', () => {
  render(<Hello name="John Snow"/>);
  const welcomeComponent = screen.getByTestId(/welcome/i);

  welcomeComponent.click()

  expect(welcomeComponent).toBeInTheDocument();
  expect(welcomeComponent).toContainHTML('<h1 data-testid="welcome">Hello, John Snow!</h1>');
  expect(welcomeComponent).toHaveTextContent('Hello, John Snow');
})