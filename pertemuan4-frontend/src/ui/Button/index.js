// Mengimport styled component
import styled from "styled-components";
import { css } from "styled-components";

// Membuat component Button
const Button = styled.button`
    padding: 0.8rem 2rem;
    border-radius: 12px;
    color: #fff;
    cursor: pointer;
    border: none;
    display: inline-block;
    margin-bottom: 1rem;

    // Mengakses props variant dan theme
    background-color: ${({theme, variant}) => theme.colors[variant] || theme.colors.primary};

    // PROPS full
    // JIKA TERDAPAT PROPS FULL MAKA SET WIDTH 100% DAN DISPLAY BLOCK
    // props full
    ${(props) => props.full && css `
        display: block ;
        width: 100%; 
    `}
    // props sm
    ${(props) => props.sm && css `
        font-size: 0.8rem;
        padding: 0.2rem 0.5rem;
    `}
    // props md
    ${(props) => props.md && css `
        font-size: 1rem;
        padding: 0.5rem 1rem;
    `}
    // props lg
    ${(props) => props.lg && css `
        font-size: 1.3rem;
        padding: 0.5rem 1rem;
    `}
`;

export default Button;