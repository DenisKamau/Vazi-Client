import React from "react";
import "./NewsLetter.css";

const NewLetter = () => {
  return (
    <div className="newsLetter">
      <div className="newsLetter__items">
        <div className="newsLetter__info">
          <h1 style={{ fontSize: "25px" }}>
            Get Our
            <br /> Latest News & Offers!
          </h1>
          <p>Subscribe to our newsletter</p>
        </div>
        <form>
          <div className="newsLetter__input">
            <input placeholder="Your email " type="email" />
            <button>Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewLetter;
