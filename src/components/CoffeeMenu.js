import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import uuid from 'uuid';
import Button from './Button';

const CoffeeMenu = ({ items, onAddToOrder }) => (
  <section className={`coffee-menu ${cx('mb3')}`}>
    <h1 className={cx('ma0', 'mb3')}>Coffee Menu</h1>
    {items.map((item, key) => (
      <div
        key={uuid()}
        className={cx('flex', 'items-center', 'justify-between', 'mb1')}
      >
        <span className={cx('italic')}>{item.name}</span>
        <Button
          label="+"
          onClick={() => {
            onAddToOrder(item);
          }}
        />
      </div>
    ))}
  </section>
);

CoffeeMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
  onAddToOrder: PropTypes.func.isRequired,
};

CoffeeMenu.defaultProps = {
  items: null,
};

export default CoffeeMenu;
