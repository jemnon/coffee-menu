import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import uuid from 'uuid';
import Button from './Button';

const PendingOrder = ({
  items,
  onChange,
  onRemoveFromOrder,
  onSubmitOrder,
  orderName,
}) => (
  <section className={`pending-order ${cx('mb3', 'mb0-ns')}`}>
    <h1 className={cx('ma0', 'mb3')}>Pending Order</h1>
    {items.length > 0 ? (
      <div>
        <ul className={cx('pl0')}>
          {items.map((item, key) => (
            <li
              className={cx('flex', 'items-center', 'justify-between', 'mb1')}
              key={uuid()}
            >
              {key + 1}. {item.name}
              <Button
                label="-"
                onClick={() => {
                  onRemoveFromOrder(key);
                }}
              />
            </li>
          ))}
        </ul>
        <form className={cx('flex', 'flex-column')} onSubmit={onSubmitOrder}>
          <label className={cx('mb2')} htmlFor="orderName">
            <span className={cx('b')}>Order Name:</span> {orderName}
          </label>
          <input
            className={cx('mb3')}
            type="text"
            name="orderName"
            id="orderName"
            onChange={onChange}
            value={orderName}
          />
          <Button label="Submit Order" type="submit" />
        </form>
      </div>
    ) : (
      'No Pending Orders'
    )}
  </section>
);

PendingOrder.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
  onChange: PropTypes.func.isRequired,
  onRemoveFromOrder: PropTypes.func.isRequired,
  onSubmitOrder: PropTypes.func.isRequired,
  orderName: PropTypes.string,
};

PendingOrder.defaultProps = {
  items: null,
  orderName: null,
};

export default PendingOrder;
