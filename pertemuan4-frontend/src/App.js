// Import Halaman Home
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/movie/Create";
import NowPlaying from "./pages/movie/NowPlaying";
import TopRatedMovie from "./pages/movie/TopRatedMovie";
import Popular from "./pages/movie/Popular";
import Layout from "./Layout/Layout";

function App() {
  /**
   * Menampilkan Halaman Home.
   * Tag div bisa diganti dengan tag <>.
   * Tag <> adalah React fragment
   * Disini kita akan melakukan route pada element home dan menu yang lainnya
   */
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movie/create" element={<Create/>}/>
          <Route path="/movie/popular" element={<Popular/>}/>
          <Route path="/movie/nowplaying" element={<NowPlaying/>} />
          <Route path="/movie/topratedmovie" element={<TopRatedMovie/>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;