/* eslint-disable react-hooks/exhaustive-deps */
// Import useEffect dan useState dari React
import { useState, useEffect } from "react";
import styles from "./Hero.module.css";

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
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>{movie.Title}</h2>
          <h3 className={styles.hero__genre}>Genre : {movie.Genre}</h3>
          <p className={styles.hero__description}>{movie.Plot}</p>
          <button className={styles.hero__button}>Watch</button>
        </div>
        <div className="hero__right">
          <img
            className={styles.hero__image}
            src={movie.Poster}
            alt="movie poster"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
