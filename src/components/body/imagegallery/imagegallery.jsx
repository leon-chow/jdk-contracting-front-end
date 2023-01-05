import "./imagegallery.css";
import { useState } from "react";

import { CarouselComponents } from "../imagecarousel/imagecarousel";

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
        onClick={() =>
          setDisplayImageGallery(
            (prevState) => (prevState = true),
            (document.body.style.overflow = "hidden")
          )
        }
      />
      {/* TODO: Fix vertical overflow for galleries and increase carousel size of galleries */}
      {displayImageGallery && props.imageList ? (
        <div className="gallery-modal">
          <span
            className="close-button"
            onClick={() =>
              setDisplayImageGallery(
                (prevState) => (prevState = false),
                (document.body.style.overflow = "auto")
              )
            }
          >
            X
          </span>
          <div className="gallery-modal-content">
            <div className="gallery-modal-container">
              {CarouselComponents(carouselIndex, props.imageList)}
              <span
                onClick={() =>
                  setCarouselIndex((prevState) =>
                    prevState === 0
                      ? props.imageList.length - 1
                      : (prevState -= 1)
                  )
                }
                className="arrow gallery-arrow-left"
              ></span>
              <span
                className="arrow gallery-arrow-right"
                onClick={() =>
                  setCarouselIndex((prevState) =>
                    prevState === props.imageList.length - 1
                      ? 0
                      : (prevState += 1)
                  )
                }
              ></span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ImageGallery;
