import "../css/Favorites.css";
import { useMoviecontext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorite() {
  const { favorites } = useMoviecontext();

  if (favorites) {
    return (
      <div className="movies-grid">
        {favorites.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    );
  }

  return (
    <div className="favorite-empty">
      <h2>No Favorite Movies</h2>
      <p>Add favorite movies</p>
    </div>
  );
}

export default Favorite;
