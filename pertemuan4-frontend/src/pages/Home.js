// Import Navbar, Hero, Movies, Footer Component, AddMovieForm
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Navbar from "../components/Navbar/Navbar";

/**
 * Membuat Component Home.
 * Menampilkan Halaman Home.
 * Menampung Navbar, Main, dan Footer Component
 */
function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Movies />
      <AddMovieForm />
      <Footer />
    </div>
  );
}

export default Home;
