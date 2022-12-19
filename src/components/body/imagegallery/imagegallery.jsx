import "./imagegallery.css";
import ImageCarousel from "../imagecarousel/imagecarousel";
import { useState } from "react";

const ImageGallery = (props) => {
  const [displayImageGallery, setDisplayImageGallery] = useState(false);
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
      {displayImageGallery && props.imageList ? (
        <div className="gallery-modal">
          <span
            className="close-button"
            onClick={() =>
              setDisplayImageGallery((prevState) => (prevState = false))
            }
          >
            X
          </span>
          <div className="gallery-modal-content">
            <ImageCarousel images={props.imageList} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ImageGallery;
