import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import Header from '../components/Header';
import renderWithReduxAndRouter from './renderWithReduxAndRouter';

const getProfileIcon = () => screen.queryByTestId('profile-top-btn');
const getPageTitle = () => screen.queryByTestId('page-title');
const getSearchButton = () => screen.queryByTestId('search-top-btn');

describe('Header component rendering', () => {
  test('Profile icon should be rendered correctly', () => {
    renderWithReduxAndRouter(<Header title="Test title" />);

    const profile = getProfileIcon();
    expect(profile).toBeVisible();
  });

  test('Page title should be rendered correctly', () => {
    renderWithReduxAndRouter(<Header title="Test title" />);

    const title = getPageTitle();
    expect(title).toBeVisible();
    expect(title.textContent).toBe('Test title');
  });

  test('Search button should be rendered correctly', () => {
    renderWithReduxAndRouter(<Header title="Test title" />);

    const search = getSearchButton();
    expect(search).toBeVisible();
  });

  test('Search button should not be rendered if enableSearch prop is false', () => {
    renderWithReduxAndRouter(<Header title="Test title" enableSearch={ false } />);

    const search = getSearchButton();
    expect(search).toBeNull();
  });
});

describe('Header component actions', () => {
  test('Profile icon should redirect correctly', () => {
    const { history } = renderWithReduxAndRouter(<Header title="Test title" />);

    expect(history.location.pathname).toEqual('/');

    const profile = getProfileIcon();
    fireEvent.click(profile);

    expect(history.location.pathname).toEqual('/profile');
  });

  test('Search button should execute onSearchClick function', () => {
    const mockFunc = jest.fn();

    renderWithReduxAndRouter(
      <Header
        title="Test title"
        onSearchClick={ mockFunc }
      />,
    );

    const search = getSearchButton();
    fireEvent.click(search);
    expect(mockFunc).toBeCalledTimes(1);
  });
});
