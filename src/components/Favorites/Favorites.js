import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Favorites.css";
import axios from "../../axios";

const Favorites = () => {
  const [Products, setProducts] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(8);

  const getProducts = (variables) => {
    axios
      .post("/getProducts", variables)

      .then((resp) => {
        if (resp.data.success) {
          setProducts([...Products, ...resp.data.products]);
        } else {
          alert("Failed to fetch data");
        }
      });
  };

  useEffect(() => {
    const variables = {
      skip: Skip,
      limit: Limit,
    };
    getProducts(variables);

    return () => {
      setProducts([]);
    };
  }, []);

  const loadMore = () => {
    let skip = Skip + Limit;

    const variables = {
      skip: skip,
      limit: Limit,
    };
    getProducts(variables);
  };

  return (
    <div className="favorites">
      <h1>Customer Favorites</h1>
      <div className="favorites__products">
        <div className="products__row">
          {Products.length === 0 ? (
            <h1 style={{ margin: "70px", textAlign: "center" }}>Loading!</h1>
          ) : (
            Products.map((product) => {
              return <Card key={product._id} id={product._id} image={product.images} price={product.price} title={product.title} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
