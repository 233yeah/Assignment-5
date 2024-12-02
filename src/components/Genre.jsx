import "./Genre.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Genre() {
  const [id, setId] = useState(null);
  const navigate = useNavigate();

  function genrePage(id) {
    navigate(`genre/${id}`);
  }

  const handleClick = (item) => {
    setId(item.id);
    genrePage(item.id)
  };

  const genres = [
    { id: 28, genre: 'Action' },
    { id: 12, genre: 'Adventure' },
    { id: 16, genre: 'Animation' },
    { id: 80, genre: 'Comedy' },
    { id: 18, genre: 'Drama' },
    { id: 36, genre: 'Horror' },
    { id: 9648, genre: 'Mystery' },
    { id: 10749, genre: 'Romance' },
    { id: 53, genre: 'Thriller' },
    { id: 37, genre: 'Western' }
  ];

  return (
    <div className="genre-container">
      <h className="genre-title">Genres</h>
      <ol className="ordered-list">
        {genres.map((item) => (
          <li key={item.id} className="genre-list" onClick={() => handleClick(item)}>
            {item.genre}
          </li>
        ))}
      </ol>
    </div>
  )
}
export default Genre;