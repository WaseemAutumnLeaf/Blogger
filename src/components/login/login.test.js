import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./login"
import userEvent from '@testing-library/user-event'
import { RecoilRoot, useRecoilValue } from 'recoil';

describe("Login compoenent",  () => {
    beforeAll(() => {
        window.alert = jest.fn();
      });
      
      afterAll(() => {
        window.alert.mockRestore();
      });
    
    test('should display an alert when username or password is too short', async () => {
        // Arrange
        render(<RecoilRoot><Login /></RecoilRoot>);
        const usernameInput = screen.getByLabelText("Username:");
        const passwordInput = screen.getByLabelText("Password:");
        const loginButton = screen.getByRole("button");

        // Act
        await fireEvent.change(passwordInput, { target: { value: "bye" } });
        await userEvent.click(loginButton);

        // Assert
        expect(window.alert).toHaveBeenCalledWith('Password must be longer than 5 characters');

    })

    test("Button disabled if username and password empty", async () => {
        render(<RecoilRoot><Login /></RecoilRoot>);
        const loginButton = screen.getByRole("button");
        expect(loginButton).toBeDisabled();
    })

    test("Button enabled if username or password not empty", async () => {
        render(<RecoilRoot><Login /></RecoilRoot>);
        const loginButton = screen.getByRole("button");
        const usernameInput = screen.getByLabelText("Username:");

        await fireEvent.change(usernameInput, { target: {value: "A"}});
        await userEvent.click(loginButton);

        expect(loginButton).toBeEnabled();
    })
})