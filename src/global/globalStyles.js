import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color:#00B900;
    --secondary-color:#ff922b;
    --white:#fff;
    --black-10: #e6e6e6;
    --black-20: #ccc;
    --black-30: #b3b3b3;
    --black-40: ##999;
    --black-50: #808080;
    --black-60: #666;
    --black-70: #4c4c4c;
    --black-80: #333;
    --black-90: #191919;
    --black-100: #000;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: 'Noto Sans KR', sans-serif;
    -webkit-font-smoothing: antialiased;
    // font-family: 'Righteous', cursive;
    color: var(--primary-color);
    background-color: var(--white);
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1rem;
    color: inherit;
    cursor: pointer;
  }

  input {
    outline: none;
    border: none;
    font: inherit;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  nav {
    color: var(--white)
  }
`;
