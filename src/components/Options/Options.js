import React, { useState } from "react";
import "./Options.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { IconButton } from "@material-ui/core";

const Options = () => {
  const [show, setshow] = useState(false);

  return (
    <div className="options">
      <div className="options__top">
        <h5>Sort by:</h5>
        <p style={{ letterSpacing: "1px", fontSize: "12px" }}>Featured Items</p>
        <IconButton
          onClick={() => setshow(!show)}
          style={{ padding: "0", marginLeft: "10px" }}
        >
          {show ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </IconButton>
      </div>
      {show && (
        <div className="options__bottom">
          <ul>
            <li>Featured Items</li>
            <li>New Items</li>
            <li>Best Selling</li>
            <li>Alphabet A to Z</li>
            <li>Alphabet Z to A</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Options;
