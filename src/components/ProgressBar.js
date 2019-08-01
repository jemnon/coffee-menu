import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const ProgressBar = ({ number, total }) => {
  const [width, setWidth] = useState(number);
  useEffect(
    () => {
      const calculateWidth = 100 * (number / total);
      setWidth(calculateWidth);
    },
    [width, number, total],
  );
  if (width === 0) return null;
  return (
    <div
      className={cx('bg-dark-gray mv3')}
      style={{ width: `${width}%`, height: '2px' }}
    />
  );
};

ProgressBar.propTypes = {
  number: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default ProgressBar;
