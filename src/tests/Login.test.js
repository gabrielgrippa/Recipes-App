import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Login from '../pages/Login';
import renderWithReduxAndRouter from './renderWithReduxAndRouter';

const getEmailInput = () => screen.getByTestId('email-input');
const getPasswordInput = () => screen.getByTestId('password-input');
const getLoginButton = () => screen.getByTestId('login-submit-btn');

const VALID_EMAIL = 'hello@email.com';
const INVALID_EMAIL = 'blah@mfk';
const VALID_PASSWORD = 'password123';
const INVALID_PASSWORD = '12a';

describe('Login form validation', () => {
  test('Button should be disabled when email is invalid', () => {
    renderWithReduxAndRouter(<Login />);

    const emailInput = getEmailInput();
    const passwordInput = getPasswordInput();
    const loginButton = getLoginButton();

    userEvent.type(emailInput, INVALID_EMAIL);
    userEvent.type(passwordInput, VALID_PASSWORD);

    expect(loginButton).toBeDisabled();
  });

  test('Button should be disabled when password is invalid', () => {
    renderWithReduxAndRouter(<Login />);

    const emailInput = getEmailInput();
    const passwordInput = getPasswordInput();
    const loginButton = getLoginButton();

    userEvent.type(emailInput, VALID_EMAIL);
    userEvent.type(passwordInput, INVALID_PASSWORD);

    expect(loginButton).toBeDisabled();
  });

  test('Button should be enabled when fields are valid', () => {
    renderWithReduxAndRouter(<Login />);

    const emailInput = getEmailInput();
    const passwordInput = getPasswordInput();
    const loginButton = getLoginButton();

    userEvent.type(emailInput, VALID_EMAIL);
    userEvent.type(passwordInput, VALID_PASSWORD);

    expect(loginButton).not.toBeDisabled();
  });
});

describe('Login flow', () => {
  test('When user click on login, set info on redux', () => {
    const { store } = renderWithReduxAndRouter(<Login />, {
      initialState: {
        profileReducer: {
          email: null,
          cocktailsToken: null,
          mealsToken: null,
        },
      } });

    const emailInput = getEmailInput();
    const passwordInput = getPasswordInput();
    const loginButton = getLoginButton();

    userEvent.type(emailInput, VALID_EMAIL);
    userEvent.type(passwordInput, VALID_PASSWORD);
    userEvent.click(loginButton);

    const state = store.getState();
    expect(state.profileReducer.email).toEqual(VALID_EMAIL);
    expect(state.profileReducer.cocktailsToken).toEqual('1');
    expect(state.profileReducer.mealsToken).toEqual('1');
  });

  test('User should be redirected after login', () => {
    const { history } = renderWithReduxAndRouter(<Login />, { initialRoute: '/' });

    const emailInput = getEmailInput();
    const passwordInput = getPasswordInput();
    const loginButton = getLoginButton();

    userEvent.type(emailInput, VALID_EMAIL);
    userEvent.type(passwordInput, VALID_PASSWORD);
    userEvent.click(loginButton);

    expect(history.location.pathname).toEqual('/foods');
  });
});
