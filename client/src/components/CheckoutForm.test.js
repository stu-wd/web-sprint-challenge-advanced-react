import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);

  const header = screen.getByRole("heading");

  expect(header).toBeTruthy();
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);

  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const addressInput = screen.getByLabelText(/address/i);
  const cityInput = screen.getByLabelText(/city/i);
  const stateInput = screen.getByLabelText(/state/i);
  const zipInput = screen.getByLabelText(/zip/i);

  userEvent.type(firstNameInput, "Nico");
  userEvent.type(lastNameInput, "Herrera");
  userEvent.type(addressInput, "P. Sherman 42 Wallaby Way");
  userEvent.type(cityInput, "Sydney");
  userEvent.type(stateInput, "Australia");
  userEvent.type(zipInput, "2000");

  expect(firstNameInput).toHaveValue("Nico");
  expect(lastNameInput).toHaveValue("Herrera");
  expect(addressInput).toHaveValue("P. Sherman 42 Wallaby Way");
  expect(cityInput).toHaveValue("Sydney");
  expect(stateInput).toHaveValue("Australia");
  expect(zipInput).toHaveValue("2000");

  const button = screen.getByRole("button");

  userEvent.click(button);

  const returnedMessage = screen.findByText(/You have ordered some plants!/i);

  returnedMessage.then((item) => {
    expect(item).toBeTruthy();
  });
});
