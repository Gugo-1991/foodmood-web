import React, { useState } from "react";

export const basketsItems = [];

export function basketCreator(_id, price, name) {
  console.log(basketsItems);
  const newItem = { _id, price, name, amount: 1 };
  if (!basketsItems.find((item) => item._id === _id)) {
    basketsItems.push(newItem);
  }
}

function Basket() {
  const [amount, setAmount] = useState(1);
  const basketElements = basketsItems.map((e) => (
    <div
      className="basketCard d-flex align-items-center justify-content-between"
      key={e._id}>
      <div className="form">{e.name}</div>
      <div className="form">${e.price}</div>
      <div className="form">{e.amount}</div>
    </div>
  ));
  const calculateTotal = () => {
    return basketsItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <>
      <div className="basketCard d-flex align-items-center justify-content-between">
        <div className="form">Name</div>
        <div className="form">Price</div>
        <div className="form">Amount</div>
      </div>

      {basketElements}

      <div className="totalPrice d-flex align-items-center  ">
        <h6> Total Price - $ {calculateTotal().toFixed(2)}</h6>
      </div>
    </>
  );
}

export default Basket;
