// Import axios, useEffect dan useState, movies and hero
import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";

function TopRatedMovie(){
    // Menyimpan API KEY dan URL ke variable
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

    // Membuat State Movies
    const [movies, setMovies] = useState([]);

    /**
     * Melakukan UseEffect
     * UseEffect to perform other jobs: fetch data
     */
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        getTopRatedMovie();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getTopRatedMovie = async () => {
        const res = await axios(URL);

        // Menyimpan data ke dalam state movie
        setMovies(res.data.results);
    }

    return (
        <div>
            <Hero />
            <Movies movies={movies} title='Top Rated Movie' />
        </div>
    )
}

export default TopRatedMovie;