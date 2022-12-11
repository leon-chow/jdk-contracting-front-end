import image from "../../../assets/KITCHEN_2.jpg";
import "./imagegallery.css";

const ImageGallery = () => {
  return (
    <div className="gallery">
      <div className="gallery-text"> Welcome to JDK Contracting! </div>
      <img className="gallery-image" alt="gallery Img" src={image} />
    </div>
  );
};

export default ImageGallery;
