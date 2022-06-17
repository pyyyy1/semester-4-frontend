// Mengimport axios, useEffect dan useState, movies and hero
import { useEffect } from "react";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/movieSlice";

function TopRated() {

  // Membuat dispatch
  const dispatch = useDispatch();
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
    dispatch(updateMovies(response.data.results));
  }

    // Membuat dispatch

  return (
    <div>
      <Hero />
      <Movies title="Top Rated"/>       
    </div>
  )
}

export default TopRated;