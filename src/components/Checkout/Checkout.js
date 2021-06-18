import React, { useEffect } from "react";
import "./Checkout.css";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { Link } from "react-router-dom";
import Subtotal from "../Subtotal/Subtotal";

const Checkout = () => {
  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    dispatch({
      type: "HIDE_MENU",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="checkout">
      <ShoppingCartOutlinedIcon />
      {cart?.length === 0 ? (
        <div className="checkout__details">
          <h2>Your Cart is empty</h2>
          <p>Items remain in your cart for 60 minutes, and then they’re moved to your Saved Items.</p>
          <p>Sign in to see your cart and get shopping!</p>
          <Link to="/login">
            <button className="cart__button">Sign in</button>
          </Link>
        </div>
      ) : (
        <div className="checkout__2">
          <h1>Your cart</h1>
          <Link className="checkout__2Link" to="/shop">
            <p>Continue shopping</p>
          </Link>
          {cart?.map((item) => (
            <CheckoutProduct key={item.id} id={item.id} title={item.title} image={item.image} price={item.price} />
          ))}
        </div>
      )}
      <div className="checkout__subtotal">
        {cart.length > 0 && (
          <div>
            <Subtotal />
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
