import "./body.css";
import Hero from "./hero/hero";
import ImageCarousel from "./imagecarousel/imagecarousel";

const Body = () => {
  return (
    <div className="body">
      <Hero />
      Check out my latest works!
      <ImageCarousel />
    </div>
  );
};

export default Body;
