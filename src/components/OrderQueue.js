import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import uuid from 'uuid';
import OrderQueueItems from './OrderQueueItems';

const OrderQueue = ({ items, onComplete }) => {
  return (
    <section className="order-queue">
      <h1 className={cx('ma0', 'mb3')}>Order Queue</h1>
      {items.length > 0
        ? items.map((item, key) => (
            <ul
              className={cx(
                'list',
                'pl0',
                'ma0',
                'mb3',
                'pb2',
                'bb',
                'b--dotted',
                'bt-0',
                'bl-0',
                'br-0',
              )}
            >
              <li key={uuid()}>
                <span className={cx('b')}>{item.orderName}:</span>
                <OrderQueueItems
                  items={item.items}
                  onCompletedOrders={onComplete}
                />
              </li>
            </ul>
          ))
        : 'Order queue is empty'}
    </section>
  );
};

OrderQueue.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
  onComplete: PropTypes.func,
};

OrderQueue.defaultProps = {
  items: null,
  onComplete: () => {},
};

export default OrderQueue;
