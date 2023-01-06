import "./body.css";
import Hero from "./hero/hero";
import About from "./about/about";
import ImageCarousel from "./imagecarousel/imagecarousel";
import ImageGallery from "./imagegallery/imagegallery";
import Contact from "./contact/contact";

import kitchen1 from "../../assets/KITCHEN_1.jpg";
import kitchen2 from "../../assets/KITCHEN_2.jpg";
import kitchen3 from "../../assets/KITCHEN_3.jpg";
import kitchen4 from "../../assets/KITCHEN_4.jpg";
import bathroom1 from "../../assets/BATHROOM_1.jpg";
import bathroom2 from "../../assets/BATHROOM_2.jpg";
import backsplash1 from "../../assets/BACKSPLASH_1.jpg";
import backsplash2 from "../../assets/BACKSPLASH_2.jpg";
import backsplash3 from "../../assets/BACKSPLASH_3.jpg";

const carouselImages = [
  kitchen1,
  kitchen2,
  kitchen3,
  kitchen4,
  bathroom1,
  bathroom2,
];

const kitchenImages = [kitchen1, kitchen2, kitchen3, kitchen4];
const bathroomImages = [bathroom1, bathroom2];
const backsplashImages = [backsplash1, backsplash2, backsplash3];
const flooringImages = [bathroom1, kitchen1, kitchen2];

const Body = () => {
  return (
    <div className="body">
      <Hero />
      <About />
      <div className="section-header">
        Below, you can find some of our best work!
      </div>
      <ImageCarousel images={carouselImages} />
      <div className="section-header">
        Check out our renovations galleries below!
      </div>
      <div className="gallery-container">
        <ImageGallery
          className="gallery"
          galleryImage={kitchen1}
          galleryText={"KITCHEN RENOVATIONS"}
          imageList={kitchenImages}
        />
        <ImageGallery
          className="gallery"
          galleryImage={bathroom1}
          galleryText={"BATHROOM RENOVATIONS"}
          imageList={bathroomImages}
        />
        <ImageGallery
          className="gallery"
          galleryImage={backsplash1}
          galleryText={"BACKSPLASH RENOVATIONS"}
          imageList={backsplashImages}
        />
        <ImageGallery
          className="gallery"
          galleryImage={bathroom1}
          galleryText={"FLOORING RENOVATIONS"}
          imageList={flooringImages}
        />
      </div>
      <Contact />
    </div>
  );
};

export default Body;
