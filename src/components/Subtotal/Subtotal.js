import React, { useEffect } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider";
import { getCartTotal } from "../../reducer";

const Subtotal = () => {
  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    hideMenu();
  }, []);

  const hideMenu = () => {
    dispatch({
      type: "HIDE_MENU",
    });
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p
              style={{
                color: "#003cff",
                letterSpacing: "2px",
                fontSize: "1.25em",
              }}
            >
              Subtotal ({cart.length}{" "}
              {cart.length > 1 ? <span>items</span> : <span>item</span>}):
              <strong
                style={window.innerWidth <= 675 ? {} : { marginLeft: "55px" }}
              >
                {value}
              </strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
