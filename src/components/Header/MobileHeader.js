import React from "react";
import "./MobileHeader.css";
import Logo from "./logo.png";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import ClearIcon from "@material-ui/icons/Clear";
import { useStateValue } from "../../StateProvider";

// Animation
import { fadeInRight } from "react-animations";
import Radium, { StyleRoot } from "radium";

const styles = {
  fadeInRight: {
    animation: "x 0.3s",
    animationName: Radium.keyframes(fadeInRight, "fadeInRight"),
  },
};

//

const MobileHeader = () => {
  const [{ show, cart }, dispatch] = useStateValue();

  const showMenu = () => {
    dispatch({ type: "SET_SHOW" });
  };

  return (
    <>
      <div className="mobileHeader">
        <div className="mobileHeader__top">
          <Link to="/checkout">
            <IconButton style={{ padding: "0" }}>
              <LocalMallOutlinedIcon
                className="basket__icon"
                style={cart.length !== 0 ? { fontSize: "33px", color: "blue" } : { fontSize: "33px", color: "black" }}
              />
            </IconButton>
          </Link>

          <Link to="/">
            <img className="mobileHeader__logo" src={Logo} alt="logo" />
          </Link>
          {show ? (
            <IconButton style={{ padding: "0", color: "black" }} onClick={showMenu}>
              <ClearIcon style={{ fontSize: "33px" }} />
            </IconButton>
          ) : (
            <IconButton style={{ padding: "0", color: "black" }} onClick={showMenu}>
              <MenuIcon style={{ fontSize: "33px" }} className="menu__icon" />
            </IconButton>
          )}
        </div>
      </div>
      <div className="mobileHeader__bottom">
        <h5>
          Free Shipping on orders above <small>$200</small>
        </h5>
      </div>
      {show && (
        <StyleRoot>
          <div style={styles.fadeInRight} id="menu" className="mobile__menu">
            <div className="mobile__menuLeft">
              <ul>
                <Link className="menuHeader__link" to="/">
                  <li>Home</li>
                </Link>
                <Link to="/shop" className="menuHeader__link">
                  <li>Shop</li>
                </Link>
                <Link to="/contact" className="menuHeader__link">
                  <li>Contact</li>
                </Link>
                <div>
                  <Link className="menu__account" to="/login">
                    <AccountCircleOutlinedIcon style={{ fontSize: "31px", color: "blue" }} />
                    <h5>Account</h5>
                  </Link>
                </div>
                {/* <div className="menu__search">
                  <IconButton>
                    <SearchIcon
                      className="searchicon"
                      style={{ fontSize: "30px", color: "grey" }}
                    />
                  </IconButton>
                  <input
                    className="menuSearch__input"
                    placeholder="Search..."
                    type="text"
                  />
                </div> */}
              </ul>
            </div>
          </div>
        </StyleRoot>
      )}
    </>
  );
};

export default MobileHeader;
