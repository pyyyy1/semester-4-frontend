// Import Component
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/movie/Create";
import NowPlaying from "./pages/movie/NowPlaying";
import TopRatedMovie from "./pages/movie/TopRatedMovie";
import Popular from "./pages/movie/Popular";
import Layout from "./Layout/Layout";

// import theme provider
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/movie/create" element={<Create/>}/>
            <Route path="/movie/popular" element={<Popular/>}/>
            <Route path="/movie/nowplaying" element={<NowPlaying/>} />
            <Route path="/movie/topratedmovie" element={<TopRatedMovie/>} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;