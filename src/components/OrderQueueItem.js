import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from './Button';
import ProgressBar from './ProgressBar';

const OrderQueueItem = ({ item, name, number, time, onComplete }) => {
  const [buttonLabel, setButtonLabel] = useState('Process');
  const [count, setCount] = useState(0);
  const interval = useRef(null);
  function handleProcessOrder() {
    setButtonLabel('...Processing');
    interval.current = setInterval(() => {
      setCount(count => count + 1);
    }, 1000);
  }
  useEffect(
    () => {
      if (count === time) {
        clearInterval(interval.current);
        setButtonLabel('Process');
        onComplete(item);
      }
    },
    [count, time, item, onComplete],
  );
  return (
    <div className="order-queue-item">
      <ProgressBar number={count} total={time} />
      <div
        className={cx(
          'flex',
          'items-center',
          'justify-between',
          'relative',
          'mb1',
        )}
      >
        <span>
          {number}. {name}
        </span>
        <Button label={buttonLabel} onClick={handleProcessOrder} />
      </div>
    </div>
  );
};

OrderQueueItem.propTypes = {
  item: PropTypes.shape({}),
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  onComplete: PropTypes.func.isRequired,
};

OrderQueueItem.defaultProps = {
  item: null,
};

export default OrderQueueItem;
