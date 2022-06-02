// Mengimport axios, useEffect dan useState, movies and hero
import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";

function NowPlaying(){
    // Menyimpan API KEY dan URL ke dalam variable
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

    // Membuat State Movies
    const [movies, setMovies] = useState([]);

    /**
     * Melakukan UseEffect
     * UseEffect to perform other jobs: fetch data
     */

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        getPlayingMovies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Membuat State getPopularMovies
    const getPlayingMovies = async () => {
        const res = await axios(URL);

        // Menyimpan data ke dalam state movie
        setMovies(res.data.results);
    }

    return (
        <div>
            <Hero />
            <Movies movies={movies} title='Now Playing Movie' />
        </div>
    );
}

export default NowPlaying;