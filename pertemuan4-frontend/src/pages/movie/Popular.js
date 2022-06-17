// Mengimport axios, useEffect dan useState, movies and hero
import { useEffect } from "react";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/movieSlice";

function PopularMovie() {
  // Membuat dispatch
  const dispatch = useDispatch();
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
    dispatch(updateMovies(response.data.results));
  }

  return (
    <div>  
      <Hero />
      <Movies title="Popular"/>
    </div>
  );
}

export default PopularMovie;