import React from "react";
import Another from "../../src/Another";
import { Given, Then, When } from "@cucumber/cucumber";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import expect from "expect";

Given("que estoy en la página Another", () => {
  cleanup();
  // Render the MyComponent
  render(<Another />);
});

When("ingreso {string} en el campo de entrada", (inputValue) => {
  // Find the input field and enter the provided value
  const input = screen.getByLabelText("Input:");
  fireEvent.change(input, { target: { value: inputValue } });
});

When("Y hago clic en el botón {string}", (buttonText) => {
  // Find the button element and click it
  const button = screen.getByRole("button", { name: buttonText });
  fireEvent.click(button);
});

Then(
  "debería ver {string} en el segundo campo de solo lectura",
  (expectedValue) => {
    // Find the second input element and verify its text content
    const input = screen.getByLabelText("Output:");
    expect(input.value).toBe(expectedValue);
  }
);
