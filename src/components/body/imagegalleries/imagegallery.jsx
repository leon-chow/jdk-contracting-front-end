import image from "../../../assets/KITCHEN_2.jpg";
import "./imagegallery.css";

const ImageGallery = () => {
  return (
    <div className="gallery">
      <img className="gallery-image" alt="gallery Img" src={image} />
    </div>
  );
};

export default ImageGallery;
