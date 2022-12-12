import "./imagegallery.css";

const ImageGallery = (props) => {
  return (
    <div className="gallery">
      <div className="overlay">
        <div className="gallery-text"> {props.galleryText} </div>
      </div>
      <img
        className="gallery-image"
        alt="gallery Img"
        src={props.galleryImage}
      />
    </div>
  );
};

export default ImageGallery;
