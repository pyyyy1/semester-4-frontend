// Mengimport axios, useEffect dan useState, movies and hero
import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints"; 

function NowPlaying() {

  // Membuat State Movies
  const [movies, setMovies] = useState([]);  

  /**
   * Melakukan UseEffect
   * UseEffect to perform other jobs: fetch data
  */
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async() => {
    getNowPlaying();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Membuat State Now Playing
  async function getNowPlaying() {
    // Fetch data dari Axios
    const response = await axios(ENDPOINTS.NOWPLAYING);

    // Menyimpan data ke dalam state movie
    setMovies(response.data.results);
  }

  return (
    <div>
      <Hero />
      <Movies movies={movies} title="Now Playing" />       
    </div>
  );
}

export default NowPlaying;