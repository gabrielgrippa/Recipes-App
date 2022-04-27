import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function CategoryButtons({ selectedItem, meals, drinks }) {
  const renderButtons = (categories) => (
    categories.map((category) => (
      <button
        type="button"
        key={ category }
        data-testid={ `${category}-category-filter` }
      >
        {category}
      </button>
    ))
  );

  const currentPage = selectedItem === '/foods' ? meals : drinks;

  return (
    <div>
      <button type="button">All</button>
      {renderButtons(currentPage)}
    </div>
  );
}

CategoryButtons.propTypes = {
  selectedItem: PropTypes.string,
  meals: PropTypes.arrayOf(PropTypes.string),
  drinks: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

const mapStateToProps = (state) => ({
  meals: state.categoryButtonsReducer.meals,
  drinks: state.categoryButtonsReducer.drinks,
});

export default connect(mapStateToProps)(CategoryButtons);
