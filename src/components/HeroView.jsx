import "./HeroView.css";
import HeroImage from "../assets/image/heroSection.jpg";

function HeroView() {

    return (
        
        <div className="top-bar">
               <div className="hero">
        <img className="hero-image" src={HeroImage}/>
        <div className="hero-text"> <label>Free Movies at Your Fingertips</label></div>
         </div>
        </div>

    )
}
export default HeroView;