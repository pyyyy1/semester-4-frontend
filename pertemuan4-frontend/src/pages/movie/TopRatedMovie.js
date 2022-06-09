// Mengimport axios, useEffect dan useState, movies and hero
import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function TopRated() {
  // Membuat State Movies
  const [movies, setMovies] = useState([]);  

  /**
   * Melakukan UseEffect
   * UseEffect to perform other jobs: fetch data
  */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  
  useEffect(() => {
    getTopRated();
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Membuat State TopRatedMovie
  async function getTopRated() {
    // Fetch data dari Axios
    const response = await axios(ENDPOINTS.TOPRATED);
    
    // Menyimpan data ke dalam state movie
    setMovies(response.data.results);
  }

  return (
    <div>
      <Hero />
      <Movies movies={movies} title="Top Rated"/>       
    </div>
  )
}

export default TopRated;