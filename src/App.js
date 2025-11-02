import React, { useEffect } from "react";
import { useState } from "react";
import products from "./data";
import Item from "./components/Item";
import CartList from "./components/CartList";
import cart from "./img/cart.png";

const App = () => {
  const [cartList, setCartList] = useState([]);
  const addToCart = (product) => {
    setCartList([...cartList, product]);
  };

  const [showCart, setShowCart] = useState(false);

  let resultation = [0];
  let sum = 0;
  resultation = cartList.map((item) => {
    return (resultation = item.price);
  });

  resultation.forEach((num) => {
    sum += num;
  });

  const removeFromCart = (productId) => {
    const index = cartList.findIndex((item) => item.id === productId);
    if (index !== -1) {
      const newCart = [...cartList]; // vytvoříme kopii pole
      newCart.splice(index, 1); // smažeme 1 prvek na daném indexu
      setCartList(newCart); // nastavíme nový stav
    }
  };

  useEffect(() => {
    if (cartList.length === 0) {
      setShowCart(false)
    }
  }, [cartList])
  return (
    <>
      <header className="header">
        <div onClick={() => setShowCart(!showCart)} className="header-content">
          <img
            
            className="cart-img"
            src={cart}
            alt="cart"
          />
          <div className="cart-right-info">
            <span className="cart-count">{cartList.length} Položky</span>
            <span>{sum} Kč</span>
          </div>
        </div>
      </header>
      <Item products={products} addToCart={addToCart} />
      {showCart && (
        <CartList removeFromCart={removeFromCart} cartList={cartList} />
      )}
    </>
  );
};

export default App;
