import image from "../../../assets/HERO.jpg";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text"> Welcome to JDK Contracting! </div>
      <img className="hero-image" alt="Hero Img" src={image} />
    </div>
  );
};

export default Hero;
