import React from "react";
import "./Footer.css";
import Logo from "./logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__logo">
          <img className="footer__logoImage" src={Logo} alt="logo" />
          <p>Lorem ipsum is a joke</p>
        </div>
        <div className="footer__links">
          <h3>Quick Links</h3>
          <p>About</p>
          <p>Offers & Coupons</p>
          <p>Get Coupon</p>
          <p>Contact us</p>
        </div>
        <div className="footer__products">
          <h3>New Products</h3>
          <p>Woman Clothing</p>
          <p>Man Clothing</p>
          <p>Baby Clothing</p>
          <p>Accessories</p>
        </div>
        <div className="footer__support">
          <h3>Support</h3>
          <p>Frequently asked questions</p>
          <p>Privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
