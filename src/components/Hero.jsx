import HeroImage from "../assets/image/heroSection.jpg";
import "./Hero.css";

function Hero() {

    return (
        <div class="hero">
            <img className="hero-image" src={HeroImage} />
            <div class="hero-text"> <label>Free Movies at Your Fingertips</label></div>
        </div>
    )
}
export default Hero;