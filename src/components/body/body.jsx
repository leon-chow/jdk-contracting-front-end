import "./body.css";
import Hero from "./hero/hero";
import ImageCarousel from "./imagecarousel/imagecarousel";
import About from "./about/about";
import ImageGallery from "./imagegallery/imagegallery";

const Body = () => {
  return (
    <div className="body">
      <Hero />
      <About />
      <div className="section-header">
        Below, you can find some of our best work!
      </div>
      <ImageCarousel />
      <div className="section-header">
        Check out our renovations galleries below!
      </div>
      <div className="gallery-container">
        <ImageGallery className="gallery" />
        <ImageGallery className="gallery" />
        <ImageGallery className="gallery" />
        <ImageGallery className="gallery" />
      </div>
    </div>
  );
};

export default Body;
