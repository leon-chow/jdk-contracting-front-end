import "./body.css";
import Hero from "./hero/hero";
import About from "./about/about";
import ImageCarousel from "./imagecarousel/imagecarousel";
import ImageGallery from "./imagegallery/imagegallery";
import Contact from "./contact/contact";

import kitchen from "../../assets/KITCHEN_1.jpg";
import bathroom from "../../assets/BATHROOM_1.jpg";
import backsplash from "../../assets/BACKSPLASH_1.jpg";

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
        <ImageGallery
          className="gallery"
          galleryImage={kitchen}
          galleryText={"KITCHEN RENOVATIONS"}
        />
        <ImageGallery
          className="gallery"
          galleryImage={bathroom}
          galleryText={"BATHROOM RENOVATIONS"}
        />
        <ImageGallery
          className="gallery"
          galleryImage={backsplash}
          galleryText={"BACKSPLASH RENOVATIONS"}
        />
        <ImageGallery
          className="gallery"
          galleryImage={bathroom}
          galleryText={"FLOORING RENOVATIONS"}
        />
      </div>
      <Contact />
    </div>
  );
};

export default Body;
