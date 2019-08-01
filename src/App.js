import React, { useState } from 'react';
import cx from 'classnames';
import uuid from 'uuid';
import Button from './components/Button';

function App() {
  const [pendingOrder, setPendingOrder] = useState([]);
  const [orderName, setOrderName] = useState('Dr Manhanttan');
  const [orderQueue, setOrderQueue] = useState([]);
  const [menuItems] = useState([
    { name: 'Cafe Au Lait', time: 4 },
    { name: 'Cappuccino', time: 10 },
    { name: 'Expresso', time: 15 },
  ]);
  function handleAddToOrder(item) {
    setPendingOrder([...pendingOrder, item]);
  }
  function handleRemoveFromOrder(key) {
    const filtered = pendingOrder.filter((item, index) => index !== key);
    setPendingOrder([...filtered]);
  }
  function handleSubmitOrder(event) {
    event.preventDefault();
    const queue = [
      {
        orderName,
        items: pendingOrder,
      },
    ];
    setOrderQueue([...orderQueue, ...queue]);
    setPendingOrder([]);
  }
  function handleChange(event) {
    const { target } = event;
    const { value } = target;
    setOrderName(value);
  }
  return (
    <div id="root" className={cx('bg-washed-yellow', 'vh-100', 'dark-gray')}>
      <div className="pa3 center mw7 flex">
        <div className="ph3 w-50">
          <section className="mb3">
            <h1 className={cx('ma0', 'mb3')}>Menu</h1>
            {menuItems.map((item, key) => (
              <div key={uuid()} className={cx('flex', 'items-center', 'justify-between', 'mb1')}>
                <span className={cx('italic')}>{item.name}</span>
                <Button
                  label="+"
                  onClick={() => {
                    handleAddToOrder(item);
                  }}
                />
              </div>
            ))}
          </section>
          <section>
            <h1 className={cx('ma0', 'mb3')}>Pending Order</h1>
            {pendingOrder.length > 0 ? (
              <div>
                <ul className={cx('pl0')}>
                  {pendingOrder.map((item, key) => (
                    <li
                      className={cx('flex', 'items-center', 'justify-between', 'mb1')}
                      key={uuid()}
                    >
                      {key + 1}. {item.name}
                      <Button
                        label="-"
                        onClick={() => {
                          handleRemoveFromOrder(key);
                        }}
                      />
                    </li>
                  ))}
                </ul>
                <form className={cx('flex', 'flex-column')} onSubmit={handleSubmitOrder}>
                  <label className={cx('mb2')} htmlFor="orderName">
                    <span className={cx('b')}>Order Name:</span> {orderName}
                  </label>
                  <input
                    className={cx('mb3')}
                    type="text"
                    name="orderName"
                    id="orderName"
                    onChange={handleChange}
                    value={orderName}
                  />
                  <Button label="Submit Order" type="submit" />
                </form>
              </div>
            ) : (
              'No Pending Orders'
            )}
          </section>
        </div>
        <div className={cx('ph3', 'w-50')}>
          <h1 className={cx('ma0', 'mb3')}>Order Queue</h1>
          {orderQueue.length > 0
            ? orderQueue.map((item, key) => (
                <ul
                  className={cx(
                    'list',
                    'pl0',
                    'ma0',
                    'mb3',
                    'pb3',
                    'bb',
                    'b--dotted',
                    'bt-0',
                    'bl-0',
                    'br-0',
                  )}
                >
                  <li key={uuid()}>
                    <span className={cx('b')}>{item.orderName}:</span>
                    <ol className="pt1">
                      {item.items.map((item, key) => (
                        <li key={uuid()}>{item.name}</li>
                      ))}
                    </ol>
                  </li>
                </ul>
              ))
            : 'Order queue is empty'}
        </div>
      </div>
    </div>
  );
}

export default App;
