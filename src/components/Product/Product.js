import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./Product.css";
import axios from "../../axios";
import { useParams } from "react-router-dom";
import { loadingAnimation } from "../utils/animations";

const Product = () => {
  const { productId } = useParams();
  const [Product, setProduct] = useState([]);

  const [Loading, setLoading] = useState(true);
  const [Done, setDone] = useState(false);

  useEffect(() => {
    axios.get(`/products_by_id?id=${productId}&type=single`).then((resp) => {
      setProduct(resp.data);
      setLoading(false);
      setDone(true);
    });
  }, []);

  return (
    <div className="product">
      {!Done ? (
        <>{loadingAnimation()}</>
      ) : (
        Product.map((item) => {
          return <ProductCard id={item._id} key={item._id} image={item.images} price={item.price} title={item.title} />;
        })
      )}
    </div>
  );
};

export default Product;
