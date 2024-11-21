import { useState, useEffect } from "react";
import "./FeatureView.css";
import axios from "axios";
function FeatureView() {
    let [image, setImage] = useState([]);

    useEffect(() => {
        (async function getImages() {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/1184918?api_key=${import.meta.env.VITE_TMDB_KEY}&append_to_response=videos`
            )
            setImage(response.data);
        }
        )
    }
    )
    return (
        <div className="feature">
            <p2>Movies for rent($2.99 a month)</p2>
            <div className="feature-flex">

                <img
                    className="movie-poster"
                    src={`https://image.tmdb.org/t/p/w500/1184918`}
                />

            </div>
        </div>
    )
}
export default FeatureView; 