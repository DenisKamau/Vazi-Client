import React from "react";
import "./Product.css";
import { useStateValue } from "../../StateProvider";
import ProductImage from "./ProductImage";

const Product = ({ id, title, price, image, description }) => {
  const [{ product }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__details">
        <div className="product__image">
          <ProductImage image={image} />
        </div>
        <div className="product__name">
          <h1>{title}</h1>

          <p>
            <small>$</small> {price}
          </p>
          <hr
            style={
              window.innerWidth <= 675
                ? { marginTop: "20px", width: "100%", opacity: "30%" }
                : {
                    marginTop: "20px",
                    width: "450px",
                    opacity: "30%",
                  }
            }
          />

          <button onClick={addToCart}>Add to Cart</button>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
