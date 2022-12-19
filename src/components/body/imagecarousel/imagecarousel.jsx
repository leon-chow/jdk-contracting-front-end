import { useState, useEffect } from "react";
import "./imagecarousel.css";

const darkGray = "#717171";
const gray = "#bbb";

export const CarouselComponents = (carouselIndex, images) =>
  images.map((image) => {
    return (
      <img
        key={image}
        className="carousel-item"
        alt="Carousel Item"
        style={{ transform: `translateX(${carouselIndex * -100}%)` }}
        src={image}
      />
    );
  });

const navigationDots = (carouselIndex, setCarouselIndex, images) =>
  images.map((image, index) => {
    return (
      <span
        key={image}
        className="dot"
        style={{
          backgroundColor: carouselIndex === index ? darkGray : gray,
        }}
        onClick={() => setCarouselIndex(index)}
      />
    );
  });

const ImageCarousel = (props) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prevState) =>
        prevState === props.images.length - 1 ? 0 : (prevState += 1)
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="carousel-container">
      <div className="image-carousel">
        {CarouselComponents(carouselIndex, props.images)}
        <span
          onClick={() =>
            setCarouselIndex((prevState) =>
              prevState === 0 ? props.images.length - 1 : (prevState -= 1)
            )
          }
          className="arrow arrow-left"
        ></span>
        <span
          className="arrow arrow-right"
          onClick={() =>
            setCarouselIndex((prevState) =>
              prevState === props.images.length - 1 ? 0 : (prevState += 1)
            )
          }
        ></span>
      </div>
      <span className="carousel-navigation">
        {navigationDots(carouselIndex, setCarouselIndex, props.images)}
      </span>
    </div>
  );
};

export default ImageCarousel;
