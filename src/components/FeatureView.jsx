import { useState, useEffect } from "react";
import "./FeatureView.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function FeatureView() {
    const [image, setImage] = useState([]);
    const params = useParams();

    useEffect(() => {
        (async function getImages() {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`
            );
            setImage(response.data);
            console.log(image.results[0].id);

        })()
    }, [])

    return (
        <div className="feature">

            <p2>Movies for rent($2.99 a month)</p2>
            <div className="feature-flex">
           
        <img
          className="movie-poster"
          src={`https://image.tmdb.org/t/p/w500${image.results[0].poster_path}`}
        />
    

            </div>
        </div>
    )
}
export default FeatureView; 