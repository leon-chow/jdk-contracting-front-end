import "./imagegallery.css";
import { useState, useRef, useEffect } from "react";

import { CarouselComponents } from "../imagecarousel/imagecarousel";

const useBlurOnGallery = (ref, shouldBlurGallery, setDisplayImageGallery) => {
  useEffect(() => {
    function clickedOutside(event) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        shouldBlurGallery
      ) {
        setDisplayImageGallery(
          (prevState) => (prevState = false),
          (document.body.style.overflow = "auto"),
          (document.body.style.filter = "none")
        );
      }
    }
    document.addEventListener("mousedown", clickedOutside);
    return () => {
      document.removeEventListener("mousedown", clickedOutside);
    };
  }, [ref, shouldBlurGallery, setDisplayImageGallery]);
};

const ImageGallery = (props) => {
  const [displayImageGallery, setDisplayImageGallery] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const galleryRef = useRef(null);
  useBlurOnGallery(galleryRef, displayImageGallery, setDisplayImageGallery);
  return (
    <div className="gallery" ref={galleryRef}>
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
