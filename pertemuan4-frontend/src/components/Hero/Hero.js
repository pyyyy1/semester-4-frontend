/* eslint-disable react-hooks/exhaustive-deps */
// Import useEffect dan useState dari React
import { useState, useEffect } from "react";
import Button from "../../ui/Button";
import HeroStyled from "./Hero.styled";

function Hero() {
  // desturcting movie state terlebih dahulu
  const [movie, setMovie] = useState("");

  useEffect(async() => {
    // melakukan useEffect: fecth data movie untuk API
    const response = await fetch("https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590");

    const formData = await response.json();
    setMovie(formData);
  }, []);

  return (
    <HeroStyled>
      <section>
        <div>
          <h2>{movie.Title}</h2>
          <h3>Genre : {movie.Genre}</h3>
          <p>{movie.Plot}</p>
          <Button variant="secondary">Watch Movie</Button>
        </div>
        <div className="hero__right">
          <img
            src={movie.Poster}
            alt="movie poster"
          />
        </div>
      </section>
    </HeroStyled>
  );
}

export default Hero;
