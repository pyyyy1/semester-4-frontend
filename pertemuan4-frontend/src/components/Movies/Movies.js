// Import useState dari React
import { useState } from "react";
import { nanoid } from "nanoid";
import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";

// Import Data Movies
import data from "../../utils/constants/data";

function Movies() {
  // Membuat state movies
  const [movies, setMovies] = useState(data);

  function handleClick() {
    const movie = {
      id: nanoid(),
      title: "Jigsaw Spiral",
      year: 2021,
      type: "Movie",
      poster: "https://picsum.photos/300/400",
    };

    /**
     * Update state movies: setMovies
     * Melakukan teknik spread untuk copy dan merge array
     */
    setMovies([...movies, movie]);
  }

  return (
    <div>
      <div className={styles.container}>
        <section className={styles.movies}>
          <h2 className={styles.movies__title}>Latest Movies</h2>
          <div className={styles.movie__container}>
            {/* Melooping component map pada add.movie */}
            {movies.map((movie) => {
              return <Movie key={movie.id} movie={movie} />;
            })}
          </div>

          {/* Button untuk AddMovie */}
          <button onClick={handleClick}>Add Movie in here</button>
        </section>
      </div>
    </div>
  );
}

export default Movies;