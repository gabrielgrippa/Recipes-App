import React from 'react';
import { render, screen } from '@testing-library/react';
import renderWithReduxAndRouter from './renderWithReduxAndRouter';
import Footer from '../components/Footer';

describe('19 - Implemente os elementos do menu inferior respeitando os atributos', () => {
  it('testa se tem todos os data-test-id necessários', () => {
    renderWithReduxAndRouter(<Footer />);
    const footer = screen.getByTestId('footer');
    const drinkIcon = screen.getByTestId('drinks-bottom-btn');
    const exploreIcon = screen.getByTestId('explore-bottom-btn');
    const mealIcon = screen.getByTestId('food-bottom-btn');
    expect(footer).toBeInTheDocument();
    expect(drinkIcon).toBeInTheDocument();
    expect(exploreIcon).toBeInTheDocument();
    expect(mealIcon).toBeInTheDocument();
  });
});

describe('20 - Posicione o menu inferior de forma fixa com 3 ícones', () => {
  it('testa se o menu inferior está fixo na parte inferior da tela', () => {
    render(<Footer />);
    const drinkIcon = screen.getByTestId('drinks-bottom-btn');
    expect(drinkIcon).toHaveProperty('src', '../images/drinkIcon.svg');
    // Testes não finalizados
  });
});
