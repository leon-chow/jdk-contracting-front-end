import "./imagegallery.css";
import CarouselComponents from "../imagecarousel/imagecarousel";
import { useState } from "react";

const ImageGallery = (props) => {
  const [displayImageGallery, setDisplayImageGallery] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  return (
    <div className="gallery">
      <div className="overlay">
        <div className="gallery-text"> {props.galleryText} </div>
      </div>
      <img
        className="gallery-image"
        alt="gallery Img"
        src={props.galleryImage}
        onClick={() => setDisplayImageGallery((prevState) => !prevState)}
      />
      {displayImageGallery ? (
        <div className="gallery-modal">
          <div className="gallery-modal-content"></div>
        </div>
      ) : null}
    </div>
  );
};

export default ImageGallery;
