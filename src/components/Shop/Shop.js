import React, { useEffect, useState } from "react";
import "./Shop.css";
import StorefrontIcon from "@material-ui/icons/Storefront";
import Card from "../Card/Card";
import { useStateValue } from "../../StateProvider";
import axios from "../../axios";
import Options from "../Options/Options";
import FadeIn from "react-fade-in";
import { doneAnimation, loadingAnimation } from "../utils/animations";
import { useParams } from "react-router";

const Shop = (props) => {
  const [{}, dispatch] = useStateValue();
  const [items, setitems] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(12);
  const [PostSize, setPostSize] = useState(0);
  const [IsLoading, setIsLoading] = useState(true);

  const [Done, setDone] = useState(false);
  let { slug } = useParams();

  // const getProducts = (variables) => {
  //   axios
  //     .post("/getProducts", variables)

  //     .then((resp) => {
  //       if (resp.data.success) {
  //         if (variables.loadMore) {
  //           setitems([...items, ...resp.data.products]);
  //         } else {
  //           setitems(resp.data.products);
  //           setIsLoading(false);
  //           setTimeout(() => {
  //             setDone(true);
  //           }, 650);
  //         }
  //         setIsLoading(false);
  //         setTimeout(() => {
  //           setDone(true);
  //         }, 650);
  //         setitems([...items, ...resp.data.products]);
  //         setPostSize(resp.data.postSize);
  //       } else {
  //         setIsLoading(false);
  //         setDone(true);
  //         alert("Failed to fetch data");
  //       }
  //     });
  // };

  const getProducts = (variables) => {
    axios
      .get(`/products/${slug}`)

      .then((resp) => {
        console.log(resp);
        if (resp.data.success) {
          // if (variables.loadMore) {
          //   setitems([...items, ...resp.data.products]);
          // } else {
          setitems(resp.data.products);
          setIsLoading(false);
          setTimeout(() => {
            setDone(true);
          }, 650);
          // }
          setIsLoading(false);
          setTimeout(() => {
            setDone(true);
          }, 650);
          setitems([...items, ...resp.data.products]);
          setPostSize(resp.data.postSize);
        } else {
          setIsLoading(false);
          setDone(true);
          alert("Failed to fetch data");
        }
      });
  };

  useEffect(() => {
    console.log(props);
    dispatch({
      type: "HIDE_MENU",
    });
    const variables = {
      skip: Skip,
      limit: Limit,
    };

    getProducts();

    return () => {
      setitems([]);
    };
  }, []);

  const loadMore = () => {
    let skip = Skip + Limit;

    const variables = {
      skip: skip,
      limit: Limit,
      loadMore: true,
    };
    getProducts(variables);
    setSkip(skip);
  };

  return (
    <div className="shop">
      <div className="shop__top">
        <div className="shop__title">
          <h1>Shop</h1>
          <StorefrontIcon style={{ marginTop: "4px" }} />
        </div>
        <div className="shop__titleRight">
          <Options />
        </div>
      </div>
      <div className="shop__items">
        {!Done ? (
          <FadeIn>
            <div className="animation1">
              <h1 style={{ letterSpacing: "2px" }}>Loading</h1>
              {IsLoading ? loadingAnimation() : doneAnimation()}
            </div>
          </FadeIn>
        ) : (
          items.map((product) => {
            return (
              <Card
                id={product._id}
                key={product._id}
                image={product.images}
                price={product.price}
                title={product.title}
                description={product.description}
              />
            );
          })
        )}
      </div>
      <br></br>
      {PostSize >= Limit && (
        <div>
          <button className="loadButton" onClick={loadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Shop;
