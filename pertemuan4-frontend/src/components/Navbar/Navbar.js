// Mengimport styled Navbar
import { Link } from "react-router-dom";
import NavbarStyled from "./Navbar.styled";

function Navbar() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <NavbarStyled>
      <nav>
        <div><h1>Movie App</h1></div>
        <div>
          <ul>
            <li><Link className="linked" to="/">Home</Link></li>
            <li><Link className="linked" to="/movie/create">Add Movies</Link></li>
            <li><Link className="linked" to="/movie/popular">Popular</Link></li>
            <li><Link className="linked" to="/movie/nowplaying">Now Playing Movie</Link></li>
            <li><Link className="linked" to="/movie/topratedmovie">Top Rated Movie</Link></li>
          </ul>
        </div>
      </nav>
    </NavbarStyled>
  );
}

export default Navbar;