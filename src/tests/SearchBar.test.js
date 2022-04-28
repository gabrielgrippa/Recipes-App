import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithReduxAndRouter from './renderWithReduxAndRouter';
import SearchBar from '../components/SearchBar';

const getSearchInput = () => screen.queryByTestId('search-input');
const getNameRadio = () => screen.queryByTestId('name-search-radio');
const getIngredientRadio = () => screen.queryByTestId('ingredient-search-radio');
const getLetterRadio = () => screen.queryByTestId('first-letter-search-radio');
const getSubmitButton = () => screen.queryByTestId('exec-search-btn');

describe('Search bar rendering', () => {
  test('Search input should be rendered correctly', () => {
    renderWithReduxAndRouter(<SearchBar />);

    const input = getSearchInput();
    expect(input).toBeVisible();
  });

  test('All search type radios should be rendered correctly', () => {
    renderWithReduxAndRouter(<SearchBar />);

    const nameRadio = getNameRadio();
    const ingredientRadio = getIngredientRadio();
    const firstLetterRadio = getLetterRadio();

    expect(nameRadio).toBeVisible();
    expect(nameRadio).toBeChecked();
    expect(ingredientRadio).toBeVisible();
    expect(firstLetterRadio).toBeVisible();
  });

  test('Submit button should be rendered correctly', () => {
    renderWithReduxAndRouter(<SearchBar />);

    const button = getSubmitButton();
    expect(button).toBeVisible();
    expect(button).not.toBeDisabled();
  });
});

describe('Search bar functionality', () => {
  test('Alert is shown if a first letter query has more than 1 character', () => {
    renderWithReduxAndRouter(<SearchBar />);
    global.alert = jest.fn();

    const input = getSearchInput();
    const firstLetterRadio = getLetterRadio();
    const button = getSubmitButton();

    userEvent.click(firstLetterRadio);
    userEvent.type(input, 'ab');
    userEvent.click(button);

    expect(global.alert).toBeCalledWith('Your search must have only 1 (one) character');
  });

  test('The search bar dispatches an action on submit click', () => {
    const { store } = renderWithReduxAndRouter(<SearchBar />, {
      initialRoute: '/drinks',
    });

    // https://stackoverflow.com/a/64425629
    const dispatchSpy = jest.spyOn(store, 'dispatch');

    const input = getSearchInput();
    const button = getSubmitButton();

    userEvent.type(input, 'Vodka');
    userEvent.click(button);

    expect(dispatchSpy).toBeCalled();
  });
});
