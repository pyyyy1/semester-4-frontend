import { nanoid } from "nanoid";
import { useState } from "react";
import styles from "./AddMovieForm.module.css";

// Menangkap props
function AddMovieForm(props) {
  /**
   * Ini hanya snippet(potongan) code.
   * Kode yang lainnya tetap sama.
   */

  // Destructing props: state movies
  const { movies, setMovies } = props;

  // Membuat state title dan date
  const [title, setTitle] = useState("Kimi");

  // Membuat state date yang dihubungkan dengan value
  const [date, setDate] = useState("2015");

  /**
   * Membuat fungsi handleTitle
   * Dijalankan ketika nilai input berubah
   */
  function handleTitle(e) {
    /**
     * Jalankan fungsi setTitile.
     * Set title nilai baru: input saat ini.
     */
    setTitle(e.target.value);
  }

  /**
   * Membuat fungsi handleDate
   * Dijalankan ketika nilai input berubah
   */
  function handleDate(e) {
    /**
     * Jalankan fungsi setDate.
     * Set date nilai baru: input saat ini.
     */
    setDate(e.target.value);
  }

  function handleSubmit(e) {
    /**
     * Mencegah perilaku default form.
     * Mencegah form direfresh ketika disubmit.
     */
    e.preventDefault();

    const movie = {
      id: nanoid(),
      title: title,
      year: date,
      type: "Movie",
      poster: "https://picsum.photos/300/400",
    };

    // SOLVED: HOW TO ADD MOVIE TO MOVIES :)
    setMovies([...movies, movie]);
  }

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__right}>
          <img
            className={styles.form__image}
            src="https://picsum.photos/536/354"
            alt=""
          />
        </div>
        <div className={styles.form__left}>
          <h2 className={styles.form__notes}>Add Movie Form</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.form__input}>
              <label htmlFor="title" className={styles.form__label}>
                Title Movie
              </label>
              <input id="title" className={styles.form__output} type="text" name="title"
                // Memberikan value input: title
                value={title}
                // Memberikan event onChange
                onChange={handleTitle}
              />
            </div>
            <div className={styles.form__input}>
              <label htmlFor="date" className={styles.form__label}>
                Year
              </label>
              <input id="date" className={styles.form__output} type="number" name="date"
                // Memberikan value input: date
                value={date}
                // Memberikan event onChange
                onChange={handleDate}
              />
            </div>
            <div>
              <button className={styles.form__btn}>Add Movie</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;