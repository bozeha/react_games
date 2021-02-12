import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    &::-webkit-scrollbar {
        width:0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: darkgray;
    }
}
body{
    font-family: "Montserrot", sans-serif;
    width:100%;
}
h2{
    font-size:3rem;
    font-family: "Abril FatFace", cursive;
    display:inline-block;
    width:100%;
}

input {
    font-weight: bold;
    font-family: "Monserrot", sans-serif;
}

a{
    text-decoration:none;
    color:black;
}
@media only screen and (max-width: 500px) {
    h2{
        font-size:2rem;
    }
}
`;

export default GlobalStyle;
