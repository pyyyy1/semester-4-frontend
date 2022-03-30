import styles from "./AddMovieForm.module.css";

function AddMovieForm() {
  return (
    <div className={styles.container}>
        <div className={styles.Addmoviesform__right}>
            <img
              className={styles.form__image}
              src="https://picsum.photos/seed/picsum/300/400"
              alt=""
            />
        </div>

        <div className={styles.Addmoviesform__left}>
            <h2 className={styles.Addmovies_notes}> Add Movie in Here</h2>
            
            <form action="/">
                <div className={styles.form__input}>
                    <label for="notes">Title Movie</label>
                    <input id="notes" type="text" className={styles.form__output} />
                </div>

                <div className={styles.form__input}>
                    <label for="year">Year</label>
                    <input id="year" type="text" className={styles.form__output} />
                </div>

                <button type="submit" className={styles.form__btn}>Submit</button>
            </form>
        </div>
    </div>
  );
}

export default AddMovieForm;