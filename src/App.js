import React, { useState } from 'react';
import cx from 'classnames';
import CoffeeCounter from './components/CoffeeCounter';
import CoffeeMenu from './components/CoffeeMenu';
import OrderQueue from './components/OrderQueue';
import PendingOrder from './components/PendingOrder';

function App() {
  const [pendingOrder, setPendingOrder] = useState([]);
  const [orderName, setOrderName] = useState('');
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
    setOrderName('');
  }
  function handleChange(event) {
    const { target } = event;
    const { value } = target;
    setOrderName(value);
  }
  function handleCompletedOrder(order) {
    console.log(order);
  }
  return (
    <div id="root" className={cx('bg-washed-yellow', 'vh-100', 'dark-gray')}>
      <div className={cx('pa3', 'center', 'mw7', 'flex-ns')}>
        <div className={cx('ph3-ns', 'w-50-ns', 'w-100')}>
          <CoffeeMenu items={menuItems} onAddToOrder={handleAddToOrder} />
          <PendingOrder
            items={pendingOrder}
            onChange={handleChange}
            onRemoveFromOrder={handleRemoveFromOrder}
            onSubmitOrder={handleSubmitOrder}
            orderName={orderName}
          />
        </div>
        <div className={cx('ph3-ns', 'w-50-ns', 'w-100')}>
          <OrderQueue items={orderQueue} onComplete={handleCompletedOrder} />
        </div>
      </div>
      <div className={cx('pa3', 'center', 'mw7')}>
        <CoffeeCounter />
      </div>
    </div>
  );
}

export default App;
