import React, { Component } from 'react';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

class Footer extends Component {
  render() {
    return (
      <footer data-testid="footer" className="fixed-bottom">
        <a href="/drinks">
          <img data-testid="drinks-bottom-btn" alt="drinkIcon" src={ drinkIcon } />
        </a>
        <a href="/explore">
          <img data-testid="explore-bottom-btn" alt="exploreIcon" src={ exploreIcon } />
        </a>
        <a href="/foods">
          <img data-testid="food-bottom-btn" alt="mealIcon" src={ mealIcon } />
        </a>
      </footer>
    );
  }
}

export default Footer;
