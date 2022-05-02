import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

class Footer extends Component {
  render() {
    return (
      <Navbar
        bg="light"
        variant="light"
        className="fixed-bottom d-flex justify-content-between"
        data-testid="footer"
      >
        <a href="/drinks">
          <img data-testid="drinks-bottom-btn" alt="drinkIcon" src={ drinkIcon } />
        </a>
        <a href="/explore">
          <img
            data-testid="explore-bottom-btn"
            alt="exploreIcon"
            src={ exploreIcon }
          />
        </a>
        <a href="/foods">
          <img data-testid="food-bottom-btn" alt="mealIcon" src={ mealIcon } />
        </a>
      </Navbar>
    );
  }
}

export default Footer;
