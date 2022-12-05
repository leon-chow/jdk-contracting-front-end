import "./body.css";
import Hero from "./hero/hero";
import ImageCarousel from "./imagecarousel/imagecarousel";
import About from "./about/about";

const Body = () => {
  return (
    <div className="body">
      <Hero />
      <About />
      <ImageCarousel />
    </div>
  );
};

export default Body;
