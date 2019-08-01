import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Button = ({ label, onClick, type }) => (
  <button
    className={cx(
      'pointer',
      'bn',
      'br-pill',
      'ph3',
      'pv2',
      'white',
      'bg-dark-gray',
      'outline-0',
    )}
    onClick={onClick}
    type={type}
  >
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

Button.defaultProps = {
  onClick: null,
  type: 'button',
};

export default Button;
