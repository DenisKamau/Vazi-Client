import React, { useEffect } from "react";
import { useStateValue } from "../../StateProvider";
import Favorites from "../Favorites/Favorites";
import ImageSlider from "../ImageSlider/ImageSlider";
import NewsLetter from "../NewsLetter/NewsLetter";

const Homepage = () => {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    dispatch({
      type: "HIDE_MENU",
    });
  }, []);

  return (
    <div className="homepage">
      <ImageSlider />
      <Favorites />
      <NewsLetter />
    </div>
  );
};

export default Homepage;
