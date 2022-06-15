// Import Navbar, Hero, Movies, Footer Component
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
// import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
/**
 * Membuat Component Main.
 * Menampung Hero dan Movies
 */
function Home() {
  /**
   * Ini hanya snippet(potongan) code.
   * Kode yang lainnya tetap sama.
   */

  /**
   * Mengangkat stave movies: lifting state.
   * Dari Component Movies ke Component Home.
   * Agar bisa digunakan oleh Component yang lain.
   */
  return (
    <div>
      <Hero />
      {/* Mengirim props: state movies */}
      <Movies title='Latest Movies'/>
    </div>
  );
}

/**
 * Membuat Component Home.
 * Menampilkan Halaman Home.
 * Menampung Navbar, Main, dan Footer Component
 */
export default Home;