import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";

const ProductImage = ({ image }) => {
  const [Images, setImages] = useState([]);

  useEffect(() => {
    if (image) {
      let images = [];

      image.map((image) => {
        images.push({
          original: `http://localhost:7000/${image}`,
          thumbnail: `http://localhost:7000/${image}`,
        });
      });
      setImages(images);
    }
  }, [image]);

  return (
    <div>
      <ImageGallery showPlayButton={false} items={Images} />
    </div>
  );
};

export default ProductImage;
