import React from "react";
import "./Card.css";

const Card = ({ image, title, id, price, description }) => {
  return (
    <div className="card__main">
      <a href={`/product/${id}`}>
        <div className="card">
          <div className="card__imageAndName">
            <img className="card__image" src={image.length > 0 ? `http://localhost:7000/${image[0]}` : `http://localhost:7000/${image}`} alt="" />
            <p className="card__title">{title}</p>
          </div>

          <p className="card__price">
            <small> $</small>
            <strong>{price}</strong>
          </p>
        </div>
      </a>
    </div>
  );
};

export default Card;
