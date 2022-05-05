import React from 'react';
import { Navbar } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { exploreIngredients } from '../redux/actions/showcaseActions';

import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  const history = useHistory();
  const dispatch = useDispatch();

  const handlerClick = (path) => {
    dispatch(exploreIngredients(false));
    history.push(`/${path}`);
  };

  return (
    <Navbar
      bg="light"
      variant="light"
      className="fixed-bottom d-flex justify-content-between footer-container"
      data-testid="footer"
    >
      <button
        type="button"
        onClick={ () => handlerClick('drinks') }
      >
        <img
          src={ drinkIcon }
          alt="drinkIcon"
          data-testid="drinks-bottom-btn"
        />
      </button>
      <button
        type="button"
        onClick={ () => handlerClick('explore') }
      >
        <img
          src={ exploreIcon }
          alt="exploreIcon"
          data-testid="explore-bottom-btn"
        />
      </button>
      <button
        type="button"
        onClick={ () => handlerClick('foods') }
      >
        <img
          src={ mealIcon }
          alt="mealIcon"
          data-testid="food-bottom-btn"
        />
      </button>
    </Navbar>
  );
}

export default Footer;
