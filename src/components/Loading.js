import React from 'react';
import { Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';

function Loading({ fullPage }) {
  return (
    <div
      className={
        fullPage
          ? 'd-flex justify-content-center align-items-center vh-100'
          : undefined
      }
    >
      <Spinner
        as="span"
        animation="border"
        size="lg"
        role="status"
        aria-hidden="true"
        variant="success"
      />
    </div>
  );
}

Loading.propTypes = {
  fullPage: PropTypes.bool,
};

Loading.defaultProps = {
  fullPage: false,
};

export default Loading;
