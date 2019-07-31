import React, { useState } from 'react';
import cx from 'classnames';

function App() {
  const [currentOrder, setCurrentOrder] = useState([]);
  const [orderName, setOrderName] = useState('');
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
      <div className="pa3">
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
        <h1 className={cx('ma0', 'mb3')}>Current Order</h1>
        {currentOrder.length > 0 ? (
          <div>
            <ul>
              {currentOrder.map((item, key) => (
                <li key={key}>{item.name}</li>
              ))}
            </ul>
            <form onSubmit={handleSubmitOrder}>
              <label htmlFor="orderName">
                Order Name: {orderName}
                <input type="text" name="orderName" id="orderName" onChange={handleChange} value={orderName} />
              </label>
              <button type="submit">Submit Order</button>
            </form>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
