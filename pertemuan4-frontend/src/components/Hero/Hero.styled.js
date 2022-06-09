// // Mengimport styled component
// import styled from "styled-components";

// // Membuat component Hero
// const HeroStyled = styled.div`
// /* Small Screen */
//   margin: 1rem;
  
//   section {
//     flex-direction: column;
//     text-align: center;
//     display: flex;
//   }
  
//   .hero__left {
//     margin-bottom: 1rem;
//   }
  
//   h2 {
//     margin-bottom: 1rem;
//     font-size: 2.44rem;
//     color: #4361ee;
//   }
  
//   h3 {
//     margin-bottom: 1rem;
//     font-size: 1.59rem;
//     color: #b5179e;
//   }
  
//   p {
//     margin-bottom: 0.8rem;
//   }
  
//   img {
//     border-radius: 25px;
//     max-width: 100%;
//     height: auto;
//   }
  
//   /* Medium Screen */
//   @media (min-width: 768px) {
//     /*
//      * Nothing TODO Here.
//      * We dont change style Hero. 
//      */
//   }
  
//   /* Large Screen */
//   @media (min-width: 992px) {
//     max-width: 1200px;
//     margin: 3rem auto;
  
//     section {
//       margin: 0 1rem;
//       flex-direction: row;
//       justify-content: space-between;
//       align-items: center;
//       text-align: left;
//     }
    
//     .hero__left {
//       flex-basis: 40%;
//     }
//   }
// `;

// export default HeroStyled;

import styled from "styled-components"

const StyledHero = styled.div`
    padding: 1rem;
    text-align: center; 
    
    h2 {
        color: #ff1622;
        margin-bottom: 1rem;
    }

    h3 {
        color: #ff1622;
        margin-bottom: 1rem;
    }

    p {
        margin-bottom: 1rem;
    }

    img {
        max-width: 100%;
        border-radius: 12px;
    }

    @media screen and (min-width: 992px) {
        text-align: left;
        max-width: 1200px;
        margin: 0 auto;

        section {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 2rem;
        }
    }
`;

const Leftside = styled.div`
    @media screen and (min-width: 992px) {
        flex-basis: 60%;
        padding-right: 1rem;
    }
`;

const Rightside = styled.div`
    @media screen and (min-width: 992px) {
        flex-basis: 40%;
        padding-left: 1rem; 
    }
`;

export { StyledHero, Leftside, Rightside };
