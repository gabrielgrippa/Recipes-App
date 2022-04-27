import React from 'react';
import { connect } from 'react-redux';

function CategoryButtons() {
  return (
    <div>
      <button type="button">All</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  meals: state.categoryButtonsReducer.meals,
  drinks: state.categoryButtonsReducer.drinks,
});

export default connect(mapStateToProps)(CategoryButtons);
