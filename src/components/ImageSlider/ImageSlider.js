import React from "react";
import { Link } from "react-router-dom";
import "./ImageSlider.css";

const ImageSlider = () => {
  return (
    <div className="imageSlider">
      <div className="imageSlider__details">
        <h2>60% Discount</h2>
        <h1>
          Winter <br /> Collection
        </h1>
        <p>Offer valid while stocks last</p>
        <Link className="slider__button" to="/shop">
          <button>Shop now</button>
        </Link>
      </div>
    </div>
  );
};

export default ImageSlider;
