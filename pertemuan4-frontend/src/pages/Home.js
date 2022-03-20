import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Navbar from "../components/Navbar/Navbar";

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