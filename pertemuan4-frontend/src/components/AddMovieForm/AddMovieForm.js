// Mengimport Components
import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addMovie } from "../../features/movieSlice";
import Alert from "../Alert/Alert";
import styles from "./AddMovieForm.module.css";

// Menangkap props
function AddMovieForm() {
  // Membuat dispacth
  const dispatch = useDispatch();

  // Membuat navigation
  const navigation = useNavigate();

  // Membuat state object
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    poster: "",
    type: "",
  });

  // Membuat state untuk error input form add movie form
  const [formError, setFormError] = useState({
    isTitleError: false,
    isDateError: false,
    isLinkError: false,
    isTypeError: false,
  });

  // Membuat fungsi handleChange yang dijalankan ketika nilai input berubah
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  // Melakukan destructing fromData pada add movie form
  const { title, date, poster: link, type } = formData;

  // Melakukan destructing formError pada add movie form
  const { isTitleError, isDateError, isLinkError, isTypeError } = formError;

  // Melakukan fungsi validasi pada form
  function validate() {
    // Validasi pada form add movie ini wajib diisi
    if (title === "") {
      setFormError({
        ...formError,
        isTitleError: true,
      });
      return false;
    } else if (date === "") {
      setFormError({
        ...formError,
        isDateError: true,
      });
      return false;
    } else if (link === "") {
      setFormError({
        ...formError,
        isLinkError: true,
      });
      return false;
    } else if (type === "") {
      setFormError({
        ...formError,
        isTypeError: true,
      });
      return false;
    } else {
      setFormError({
        isTitleError: false,
        isDateError: false,
        isLinkError: false,
        isTypeError: false,
      });
      return true;
    }
  }

  // Melakukan function add movie pada form
  function submitMovie() {
    const movie = {
      id: nanoid(),
      year: date,
      poster: link,
      title: title,
      type: type,
    };
    // SOLVED: HOW TO ADD MOVIE TO MOVIES :)
    dispatch(addMovie(movie));

    // Melakukan redirect navigation pada addmovieform ke halaman home
    navigation("/");
  }

  // Melakukan function handleSubmit pada add movie form
  function handleSubmit(e) {
    e.preventDefault();

    validate() && submitMovie();
  }

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__right}>
          <img className={styles.form__image} src="https://picsum.photos//500" alt="" />
        </div>

        <div className={styles.form__left}>
          <h2 className={styles.form__notes}>Add Movie Form</h2>
          <form onSubmit={handleSubmit}>
            {/* Title Movie pada form Add Movie */}
            <div className={styles.form__input}>
              <label htmlFor="title">Title Movie</label>
              <input
                // Memberikan event onChange
                onChange={handleChange}
                id="title"
                className={styles.form__output}
                type="text"
                name="title"
                // Memberikan value input: title
                value={title}
              />
              {/**
               * Apabila kolom title pada form kosong / tidak bernilai maka tampilkan pesan error bahwa title wajib diisi
               */}
              {isTitleError && <Alert>Title ini wajib diisi sist</Alert>}
            </div>

            {/* Year Movie pada form Add Movie */}
            <div className={styles.form__input}>
              <label htmlFor="year">Year Movie</label>
              <input
                // Memberikan event onChange
                onChange={handleChange}
                id="year"
                className={styles.form__output}
                type="number"
                name="date"
                // Memberikan value input: date
                value={date}
              />
              {/**
               * Apabila kolom year pada form kosong / tidak bernilai maka tampilkan pesan error bahwa year wajib diisi
               */}
              {isDateError && <Alert>Year ini wajib diisi sist</Alert>}
            </div>

            <div className={styles.form__input}>
              <label htmlFor="link">Poster Link</label>
              <input
                // Memberikan event onChange
                onChange={handleChange}
                id="link"
                className={styles.form__output}
                type="url"
                name="poster"
                // Memberikan value input: link
                value={link}
              />
              {/**
               * Apabila kolom poster pada form kosong / tidak bernilai maka tampilkan pesan error bahwa picture poster wajib diisi
               */}
              {isLinkError && <Alert>Poster ini wajib diisi sist</Alert>}
            </div>

            <div className={styles.form__input}>
              <label htmlFor="type">Type Movie</label>
              <select name="type" id="type" className={styles.form__input} value={type} onChange={handleChange}>
                <option value="">~~ Choose Movie here ~~</option>
                <option value="movie">Movie</option>
                <option value="action">Action</option>
                <option value="drama">Drama</option>
                <option value="horror">Horror</option>
                <option value="comedy">Comedy</option>
                <option value="series">Series</option>
                <option value="animation">Animation</option>
              </select>
              {/**
               * Apabila kolom type movie pada form kosong / tidak bernilai maka tampilkan pesan error bahwa type movie ini wajib diisi
               */}
              {isTypeError && <Alert>Type ini wajib diisi sist</Alert>}
            </div>

            <button type="submit" className={styles.form__btn}>
              Add Movie Form
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;