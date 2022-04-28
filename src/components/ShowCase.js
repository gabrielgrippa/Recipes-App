import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function ShowCase({ showCase }) {
  const lengthLimit = () => {
    // const QT_MAX = 12;
    console.log(showCase);
  };
  lengthLimit();
  return (
    <div>
      showcase
    </div>
  );
}

ShowCase.propTypes = {
  showCase: PropTypes.array,
}.isRequired;

const mapStateToProps = (state) => ({
  showCase: state.showcaseReducer,
});

export default connect(mapStateToProps)(ShowCase);
