import React from "react";
import "./Item.css";

const Item = ({ products, addToCart }) => {
  return (
    <div className="products">
      {products.map((oneItem) => {
        const { id, name, price, image } = oneItem;

        return (
          <div className="product" key={id}>
            <img src={image} alt="product" />
            <div className="product-down">
              <h3 className="title">{name}</h3>
              <div className="product-down-two">
                <button onClick={() => addToCart(oneItem)} className="btn-to-cart">
                  Přidat do košíku
                </button>
                <p>{price}Kč</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Item;
