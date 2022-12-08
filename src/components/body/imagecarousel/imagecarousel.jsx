import "./imagecarousel.css";
import image from "../../../assets/KITCHEN_1.jpg";
import image2 from "../../../assets/KITCHEN_2.jpg";

const ImageCarousel = () => {
  return (
    <div className="image-carousel">
      <img className="carousel-item" alt="Hero Img" src={image} />
      <img className="carousel-item" alt="Carousel Img" src={image2} />
      <span className="arrow left"> </span>
      <span className="arrow right"> </span>
    </div>
  );
};

export default ImageCarousel;
