import { useState, useEffect } from "react";
import "./imagecarousel.css";
import image1 from "../../../assets/KITCHEN_1.jpg";
import image2 from "../../../assets/KITCHEN_2.jpg";
import image3 from "../../../assets/KITCHEN_3.jpg";
import image4 from "../../../assets/KITCHEN_4.jpg";
import image5 from "../../../assets/BATHROOM_1.jpg";
import image6 from "../../../assets/BATHROOM_2.jpg";

const images = [image1, image2, image3, image4, image5, image6];
const darkGray = "#717171";
const gray = "#bbb";

const CarouselComponents = (carouselIndex) =>
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

const navigationDots = (carouselIndex, setCarouselIndex) =>
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

const ImageCarousel = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prevState) =>
        prevState === images.length - 1 ? 0 : (prevState += 1)
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="carousel-container">
      <div className="image-carousel">
        {CarouselComponents(carouselIndex)}
        <span
          onClick={() =>
            setCarouselIndex((prevState) =>
              prevState === 0 ? images.length - 1 : (prevState -= 1)
            )
          }
          className="arrow arrow-left"
        ></span>
        <span
          className="arrow arrow-right"
          onClick={() =>
            setCarouselIndex((prevState) =>
              prevState === images.length - 1 ? 0 : (prevState += 1)
            )
          }
        ></span>
      </div>
      <span className="carousel-navigation">
        {navigationDots(carouselIndex, setCarouselIndex)}
      </span>
    </div>
  );
};

export default ImageCarousel;
