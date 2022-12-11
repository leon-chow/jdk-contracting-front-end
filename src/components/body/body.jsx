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
      <ImageCarousel />
      <ImageGallery />
    </div>
  );
};

export default Body;
