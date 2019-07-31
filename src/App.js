import React, { useState } from 'react';
import cx from 'classnames';

function App() {
  const [currentOrder, setCurrentOrder] = useState([]);
  const [orderName, setOrderName] = useState('Dr Manhanttan');
  const [orderQueue, setOrderQueue] = useState([]);
  const [menuItems] = useState([
    { name: 'Cafe Au Lait', time: 4 },
    { name: 'Cappuccino', time: 10 },
    { name: 'Expresso', time: 15 },
  ]);
  function addToOrder(item) {
    setCurrentOrder([...currentOrder, item]);
  }
  function handleSubmitOrder(event) {
    event.preventDefault();
  }
  function handleChange(event) {
    const { target } = event;
    const { value } = target;
    setOrderName(value);
  }
  return (
    <div id="root" className={cx('bg-washed-yellow', 'vh-100')}>
      <div className="pa3 center mw7 flex">
        <div className="ph3 w-50">
          <section className="mb3">
            <h1 className={cx('ma0', 'mb3')}>Menu</h1>
            {menuItems.map((item, key) => (
              <button
                key={key}
                onClick={() => {
                  addToOrder(item);
                }}
              >
                {item.name}
              </button>
            ))}
          </section>
          <section>
            <h1 className={cx('ma0', 'mb3')}>Current Order</h1>
            {currentOrder.length > 0 ? (
              <div>
                <ul>
                  {currentOrder.map((item, key) => (
                    <li key={key}>{item.name}</li>
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
                  <button type="submit">Submit Order</button>
                </form>
              </div>
            ) : (
              'No orders yet'
            )}
          </section>
        </div>
        <div className="ph3 w-50">
          <h1 className={cx('ma0', 'mb3')}>Order Queue</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
