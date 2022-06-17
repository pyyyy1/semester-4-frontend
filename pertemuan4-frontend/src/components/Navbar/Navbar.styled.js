// Mengimport styled component
import styled from "styled-components";

// Membuat component Navbar
const NavbarStyled = styled.div`
  background-color: #e94ed2;
  padding: 1rem;
  color: #fff;

  nav {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 2.4rem;
    margin-bottom: 1rem;
    color: rgb(255, 255, 225) !important;
    text-shadow: 1px 1px 1px rgba(245, 236, 236, 0.7);
  }

  ul {
    list-style: none;
    color: rgb(255, 255, 225) !important;
    text-shadow: 1px 1px 1px rgba(245, 236, 236, 0.7);
  }

  li{
    margin-bottom: 1rem;
  }

  .linked{
    text-decoration: none;
    color: #fff;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
  nav {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    margin-bottom: 0;
  }

  ul {
    display: flex;
    flex-direction: row;
  }

  li {
    margin: 0 1rem;
  }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    /* 
    * Nothing TODO HERE.
    * We haven't styling Navbar.
    */
  nav {
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }

  h1 {
    margin-bottom: 0;
  }

  ul {
    flex-direction: row;
  }

  li {
    margin: 1rem;
  }
  }
`;

export default NavbarStyled;