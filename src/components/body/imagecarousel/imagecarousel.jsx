import { useState } from "react";
import "./imagecarousel.css";
import image1 from "../../../assets/KITCHEN_1.jpg";
import image2 from "../../../assets/KITCHEN_2.jpg";
import image3 from "../../../assets/KITCHEN_3.jpg";
import image4 from "../../../assets/KITCHEN_4.jpg";
import image5 from "../../../assets/BATHROOM_1.jpg";
import image6 from "../../../assets/BATHROOM_2.jpg";

const images = [image1, image2, image3, image4, image5];

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

const ImageCarousel = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  return (
    <div className="image-carousel">
      {CarouselComponents(carouselIndex)}
      <span
        onClick={() =>
          setCarouselIndex((prevState) =>
            prevState === 0 ? images.length - 1 : (prevState -= 1)
          )
        }
        className="arrow left"
      ></span>
      <span
        className="arrow right"
        onClick={() =>
          setCarouselIndex((prevState) =>
            prevState === images.length - 1 ? 0 : (prevState += 1)
          )
        }
      ></span>
      <div className="center"> index: {carouselIndex} </div>
    </div>
  );
};

export default ImageCarousel;
