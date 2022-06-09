// Mengimport axios, useEffect dan useState, movies and hero
import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function PopularMovie() {
  // Membuat State Movies
  const [movies, setMovies] = useState([]);

  /**
   * Melakukan UseEffect
   * UseEffect to perform other jobs: fetch data
  */
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getPopularMovies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Membuat State Popular Movie
  async function getPopularMovies() {
    // Fetch data dari Axios
    const response = await axios(ENDPOINTS.POPULAR);

    // Menyimpan data ke dalam state movie
    setMovies(response.data.results);
  }

  return (
    <div>  
      <Hero />
      <Movies movies={movies} title="Popular"/>
    </div>
  );
}

export default PopularMovie;
