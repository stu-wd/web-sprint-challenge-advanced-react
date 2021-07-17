import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

// test("form header renders", () => {
//     render(<CheckoutForm />)
//     const header = screen.getByText('Checkout Form')
//     expect(header) = toBeDefined()
// });

test("form header renders", () => {
    render(<CheckoutForm />);
    const formHeader = screen.getByText("Checkout Form");
    expect(formHeader).toBeDefined();
  });

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    const firstName = 'Trey'
    const lastName = 'Page'
    const address = '13 Bakers Dozen'
    const city = 'Checkin em out'
    const state = 'Harpua'
    const zip = '69420'

    const firstNameInput = screen.getByLabelText(/First Name/)
    const lastNameInput = screen.getByLabelText(/Last Name/)
    const addressInput = screen.getByLabelText(/Address/)
    const cityInput = screen.getByLabelText(/City/)
    const stateInput = screen.getByLabelText(/State/)
    const zipInput = screen.getByLabelText(/Zip/)
    const checkoutButton = screen.getByRole('button')

    userEvent.type(firstNameInput, firstName)
    userEvent.type(lastNameInput, lastName)
    userEvent.type(addressInput, address)
    userEvent.type(cityInput, city)
    userEvent.type(stateInput, state)
    userEvent.type(zipInput, zip)
    userEvent.click(checkoutButton)

    const successDisplay = screen.getByTestId('successMessage')

    expect(successDisplay).toHaveTextContent(firstName)
    expect(successDisplay).toHaveTextContent(lastName)
    expect(successDisplay).toHaveTextContent(address)
    expect(successDisplay).toHaveTextContent(city)
    expect(successDisplay).toHaveTextContent(state)
    expect(successDisplay).toHaveTextContent(zip)
});
