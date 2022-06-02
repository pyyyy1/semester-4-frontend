// Import axios, useEffect dan useState, movies and hero
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../../ui/Button";
import HeroStyled from "./Hero.styled";

/* eslint-disable react-hooks/exhaustive-deps */
function Hero() {
    // Membuat state movie
    const [movie, setMovie] = useState("");
    
    const genre = movie && movie.genres.map((genres) => genre.name).join("");
    const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;
    
    const API_KEY = process.env.REACT_APP_API_KEY;
  
    //mendapatkan 1 data dari trending movies
    async function getTrendingMovie(){
      const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
      const response = await axios(URL);
      return response.data.results[0];
    }
  
    //membuat fungsi untuk mendapatkan detail movie
    async function getDetailMovie(){
      // Ambil 1 data trending movie, lalu ambil id-nya
      const trendingMovie = await getTrendingMovie();
      const id = trendingMovie.id;
  
      // Fetch detail movie berdasarkan id
      const URL = `
        https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos
      `;
      const response = await axios(URL);
     
  
      setMovie(response.data);
    }

    useEffect(getDetailMovie, []);

  return (
        <HeroStyled>
            <section>
            <div className="hero__right">
                <h2>{movie.Title}</h2>
                <h3>Genre : {movie.Genre}</h3>
                <p>{movie.Plot}</p>
                    <Button as="a" href={trailer} target='_blank' variant="secondary" size="lg">Watch Movie</Button>
            </div>
            <div className="hero__left">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="" />
            </div>
            </section>
        </HeroStyled>
  );
}

export default Hero;