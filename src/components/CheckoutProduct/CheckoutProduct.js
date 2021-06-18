import React from "react";
import { useStateValue } from "../../StateProvider";
import "./CheckoutProduct.css";

const CheckoutProduct = ({ id, title, price, image }) => {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img
        src={
          image.length > 0
            ? `http://localhost:7000/${image[0]}`
            : `http://localhost:7000/${image}`
        }
        alt=""
      />
      <p className="checkoutProduct__title">{title}</p>
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__Price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <button className="checkout__button" onClick={removeFromCart}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
