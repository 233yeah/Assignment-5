import "./HomeView.css";
import HeroImage from "../assets/image/heroSection.jpg";
import { useState, useEffect } from "react";
import axios from "axios";

function HomeView() {
    const [image, setImage] = useState([]);
    const [loading, setLoading] = useState(true);  // State for loading status

         (async function getImages() {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`
                );
                setImage(response.data.results);  
            } catch (error) {
                console.error("Error fetching images:", error);
            } finally {
                setLoading(false);  
            }
        })();
     [];  

  
    if (loading) {
        return <div>Loading...</div>;  

    }
   
    return (
        <div>
            <div className="top-bar">
                <h className="logo">WacFlix</h>
                <div className="buttons">
                    <button>Sign Up</button>
                    <button>Sign In</button>
                </div>
            </div>

            <div class="hero">
                <img className="hero-image" src={HeroImage} />
                <div class="hero-text"> <label>Free Movies at Your Fingertips</label></div>
            </div>

            <div className="feature">

                <p2>Movies for rent($2.99 a month)</p2>
                <div className="feature-flex">
                    <img
                        className="feature-image 1"
                        src={Math.floor(Math.random() * image.length)}
                    />
                    <img
                        className="feature-image 2"
                        src={Math.floor(Math.random() * image.length)}

                    />
                    <img
                        className="feature-image 3"
                        src={Math.floor(Math.random() * image.length)}

                    />
                    <img
                        className="feature-image 4"
                        src={Math.floor(Math.random() * image.length)}
                     
                    />

                </div>
            </div>


            <div className="tb-item bottom-item">
                <div className="bottom-text">
                    <p>Contact - 123-456-7890</p>
                    <p>Email - WacFlix@gmail.com</p>
                    <p>Instagram - WacFlix CA</p>
                </div>
            </div>
        </div>

    )
}

export default HomeView;