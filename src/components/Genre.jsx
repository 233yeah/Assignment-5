import "./Genre.css";
function genre() {

function getGenre(id){

}

    return (
      <div className="genre-container">
        <ol className="genre-list">
        <li onClick={()=>{getGenre(21)}}>Action</li>
        <li>Fantasy</li>
        <li>Animation</li>
        <li>Comedy</li>
        <li>Romance</li>
        <li>Horror</li>
        <li>Thriller</li>
        <li>Crime</li>
        <li>Mystery</li>
        <li>Adventure</li>
      </ol>
      </div>
    )
}
export default genre;