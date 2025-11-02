import React from "react";
import { useState } from "react";

const CartList = ({ cartList, removeFromCart}) => {
  const productsCount = {};

  cartList.forEach((item) => {
    if (productsCount[item.id]) {
      productsCount[item.id].count += 1;
    } else {
      productsCount[item.id] = {
        id: item.id,
        name: item.name,
        price: item.price,
        count: 1,
      };
    }
  });

  const cartItemInfo = Object.values(productsCount);

  const totalCartPrice = cartItemInfo.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );

  return (
    <div className="cart-list-all">
      <h2 className="cart-title">Košík</h2>
      <ul>
        {cartItemInfo.map((item, index) => {
          return (
            <li className="cart-list-item" key={index}>
              {index + 1}. {item.name}
              <div className="cart-list-bottom">
                <span className="item-price">{item.price * item.count} Kč</span>
                <span className="item-count">{item.count}x</span>
                <button onClick={() => removeFromCart(item.id)} className="cart-list-btn">Odebrat</button>
              </div>
            </li>
          );
        })}
      </ul>
      {!cartList.length && <p>Košík je prázdný </p>}
      <div className="total-cart-price">
        {totalCartPrice > 0 && <p>Celková cena: {totalCartPrice} Kč</p>}
      </div>
    </div>
  );
};

export default CartList;
