import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
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
  const [title, setTitle] = useState("");

  // Membuat state date yang dihubungkan dengan value
  const [date, setDate] = useState("");

  // Membuat state type yang dihubungkan dengan value
  const [type, setType] = useState("default");

  // Membuat state poster pada form
  const [poster, setPoster] = useState("");

  // Membuat state apabila title bersifat empty / kosong
  const [isTitleEmpty, setTitleEmpty] = useState(false);

  // Membuat state apbila date bersifat empty / kosong
  const [isDateEmpty, setDateEmpty] = useState(false);

  // Membuat state date yang dihubungkan dengan value
  const [isPosterEmpty, setPosterEmpty] = useState(false);

  /**
   * Membuat fungsi handleTitle yang dijalankan ketika nilai input berubah
   */
  function handleTitle(e) {
    /**
     * Jalankan fungsi setTitile.
     * Set title yang berisi nilai baru untuk diinput saat ini.
     */
    setTitle(e.target.value);
  }

  /**
   * Membuat fungsi handleDate yang dijalankan ketika nilai input berubah
   */
  function handleDate(e) {
    /**
     * Jalankan fungsi setDate.
     * Set date nilai baru: input saat ini.
     */
    setDate(e.target.value);
  }

  /**
   * Membuat fungsi handleType yang dijalankan ketika nilai input berubah
   */
   function handleType(e) {
    /**
     * Jalankan fungsi setType.
     * Set Type berisi suatu nilai baru yang harus di input saat ini.
     */
    setType(e.target.value);
  }

  /**
   * Membuat fungsi handlePoster yang dijalankan ketika nilai input berubah
   */
   function handlePoster(e) {
    /**
     * Jalankan fungsi setPoster.
     * Set Poster berisi suatu nilai baru poster yang dapat di input saat ini.
     */
    setPoster(e.target.value);
  }

  /**
   * Membuat fungsi handleSubmit yang dijalankan ketika nilai input berubah
   */
  function handleSubmit(e) {
    /**
     * Mencegah perilaku default form yang direfresh ketika form di submit.
     */
    e.preventDefault();

    // Jika title kosong, maka setTitleEmpty true
      if (title == ""){
          setTitleEmpty(true);
      }
      else if (date == ""){
          setTitleEmpty(false);
          setDateEmpty(true);
      }
      else if(poster == ""){
          setPosterEmpty(true);
          setDateEmpty(false);
          setTitleEmpty(false);
      }
      else{
          //siapkan data movie
          const movie = {
              id: nanoid(),
              title: title,
              year: date,
              type: type,
              poster: poster,
          };

          setMovies([...movies, movie]);
          setTitleEmpty(false);
          setDateEmpty(false);      
      }
  }

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__right}>
          <img className={styles.form__image} src="https://picsum.photos//500" alt=""/>
        </div>
        <div className={styles.form__left}>
          <h2 className={styles.form__notes}>Add Movie Form</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.form__input}>
              <label htmlFor="title" className={styles.form__label}>Title Movie</label>
              <input 
                // Memberikan event onChange
                onChange={handleTitle}
                id="title" 
                className={styles.form__output} 
                type="text" 
                name="title"
                // Memberikan value input: title
                value={title}
              />
              {/** 
               * Apabila empty / folder kosong pada title movie bernilai true (benar) maka tampilkan pesan error 
               * Tapi jika tidak , harap tampilkan string yang bersifat kosong agar mempermudah penggunaan
              */}
              {
                isTitleEmpty && <Alert>Title ini wajib diisi</Alert>
              }
            </div>
            
            <div className={styles.form__input}>
              <label htmlFor="date" className={styles.form__label}>Year</label>
              <input 
                // Memberikan event onChange
                onChange={handleDate}
                id="date" 
                className={styles.form__output} 
                type="number" 
                name="date"
                // Memberikan value input: date
                value={date}
              />
              {/** 
               * Apabila empty / folder kosong pada tdate movie bernilai true (benar) maka tampilkan pesan error 
               * Tapi jika tidak , harap tampilkan string yang bersifat kosong agar mempermudah penggunaan
              */}
              {
                isDateEmpty && <Alert>Date ini wajib diisi</Alert>
              }
            </div>
            <div className={styles.form__input}>
              <label htmlFor="ttype" className={styles.form__label}>Type</label>
              <select className={styles.form__input} id="type" value={type} onChange={handleType}>
              <option>~~ Choose Here Please ~~ </option>
                <option value="movie">Movie</option>
                <option value="action">Action</option>
                <option value="drama">Drama</option>
                <option value="horror">Horror</option>
                <option value="comedy">Comedy</option>
                <option value="series">Series</option>
                <option value="animation">Animation</option>
              </select>
            </div>
            <div className={styles.form__input}>
              <label htmlFor="poster" className={styles.form__label}>Poster</label>
              <input 
                // Memberikan event onChange
                onChange={handlePoster}
                id="poster" 
                className={styles.form__output} 
                type="textr" 
                name="poster"
                // Memberikan value input: date
                value={poster}
              />
              {/** 
               * Apabila empty / folder kosong pada poster di form movie bernilai true (benar) maka tampilkan pesan error 
               * Tapi jika tidak , harap tampilkan string yang bersifat kosong agar mempermudah penggunaan
              */}
              {
                isPosterEmpty && <Alert>Poster ini wajib diisi</Alert>
              }
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