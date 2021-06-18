import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import "./Header.css";
import { useStateValue } from "../../StateProvider";
import { IconButton } from "@material-ui/core";
import Logo from "./logo.png";
import MobileHeader from "./MobileHeader";
import swal from "sweetalert";
import axios from "../../axios";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const Header = () => {
  const [{ token, categories }, dispatch] = useStateValue();

  const [{ cart }] = useStateValue();

  const [Width, setWidth] = useState(window.innerWidth);

  const checkSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  useEffect(() => {
    axios.get("/category/getcategory").then((resp) => {
      if (resp.status === 200) {
        const { categoryList } = resp.data;
        dispatch({
          type: "SET_CATEGORIES",
          item: categoryList,
        });
      } else {
        console.log("failed");
      }
    });
    return () => {};
  }, []);

  const signout = () => {
    axios.post("/account/logout").then((resp) => {
      console.log(resp);
      if (resp.status === 200) {
        swal({
          title: "Logged out",
          button: false,
          icon: "success",
          timer: 1700,
        });
        localStorage.clear();
        dispatch({
          type: "LOGOUT_REQUEST",
        });
      } else {
        swal({
          title: "Signout failed",
          button: false,
          icon: "error",
          timer: 1700,
        });
      }
    });
  };

  return (
    <>
      {Width <= 850 ? (
        <MobileHeader />
      ) : (
        <div className="header">
          <div className="header__top">
            <h5>
              Free Shipping on orders above <small>$200</small>
            </h5>
          </div>

          <div className="header__bottom">
            <div className="header__logo">
              <Link to="/">
                <img className="header__logoImage" src={Logo} alt="" />
              </Link>
            </div>

            <div className="header__bottomMiddle">
              {categories.length > 0
                ? categories[0].map((category) => {
                    const { _id, name } = category;
                    return (
                      <ul className="categories">
                        <div className="main_categories">
                          <li key={_id}>{name}</li>
                          <ArrowDropDownIcon />
                        </div>
                        <div className="all__options">
                          {category.children.length > 0
                            ? category.children.map((cat) => {
                                const { _id, name, slug } = cat;
                                return (
                                  <>
                                    <div className="option">
                                      <a key={_id} href={slug}>
                                        {name}
                                      </a>
                                    </div>
                                    {cat.children.length > 0
                                      ? cat.children.map((categ) => {
                                          const { _id, name, slug } = categ;
                                          return (
                                            <a key={_id} href={slug}>
                                              {name}
                                            </a>
                                          );
                                        })
                                      : null}
                                  </>
                                );
                              })
                            : null}
                        </div>
                      </ul>
                    );
                  })
                : null}

              {/* <Link to="/" className="header__link">
                  <li>Home</li>
                </Link>
                <Link to="/shop" className="header__link">
                  <li>Shop</li>
                </Link>
                <Link to="/contact" className="header__link">
                  <li>Contact</li>
                </Link> */}
            </div>
            <div className="header__icons">
              <div className="header__search">
                <input className="search__input" placeholder="Search products..." type="text" />
                <IconButton>
                  <SearchIcon className="searchicon" />
                </IconButton>
              </div>{" "}
              <IconButton>
                <Link className="checkout__icon" to="/checkout">
                  <ShoppingCartOutlinedIcon style={cart.length === 0 ? { color: "black" } : { color: "blue" }} />
                  {cart.length > 0 ? <p>{cart.length}</p> : <></>}
                </Link>
              </IconButton>
              <>
                {!token ? (
                  <IconButton>
                    <Link to="/login">
                      <AccountCircleOutlinedIcon style={{ color: "blue", marginTop: "5px" }} />
                    </Link>
                  </IconButton>
                ) : (
                  <button className="logoutButton" onClick={signout}>
                    LOG OUT
                  </button>
                )}
              </>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
