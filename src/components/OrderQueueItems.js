import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import uuid from 'uuid';
import OrderQueueItem from './OrderQueueItem';

function sortedByTime(items) {
  return items.sort((a, b) => b.time - a.time);
}

const OrderQueueItems = ({ items }) => {
  const [completedOrders, setCompletedOrder] = useState([]);
  const sortedItems = sortedByTime(items);
  function handleOnComplete(item) {
    //setCompletedOrder([...completedOrders, item]);
    console.log('completedOrders: ', item);
  }
  return (
    <ul className={cx('list', 'pt1', 'pl0')}>
      {sortedItems.map((item, key) => (
        <li key={uuid()}>
          <OrderQueueItem
            item={item}
            name={item.name}
            number={key + 1}
            time={item.time}
            onComplete={handleOnComplete}
          />
        </li>
      ))}
    </ul>
  );
};

OrderQueueItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
};

OrderQueueItems.defaultProps = {
  items: null,
};

export default OrderQueueItems;
