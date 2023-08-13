"use client";

import { createGlobalStyle } from "styled-components";
import { typography } from "./typography";
import { colors } from "./colors";
import { spacing } from "./spacing";

const GlobalStyle = createGlobalStyle`

    :root {

      ${typography}
      ${colors}
      ${spacing}

      --bg-color:  var(--background-500);
      --text-primary: var(--gray-300);
      --text-active: var(--gray);
      --text-secondary: var(--gray-500);
           
    }

    html {
      font-family: var(--font-family);
      scroll-behavior: smooth;
      scroll-padding-top: 300px;
    }
    
    html, body {
      color: var(--text-primary);
      font-weight: var(--weight-light);
      width: 100vw;
      height: 100vh;
      overflow-x: hidden;
      background: var(--bg-color);
    }

    body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-image: url(/noise.webp);
      background-size: cover;
      background-repeat: no-repeat;
      background-blend-mode: overlay;
      background-position: center;
      font-size: var(--font-base-size);
      -webkit-font-smoothing: antialiased;    
    }

    body::-webkit-scrollbar,div::-webkit-scrollbar, section::-webkit-scrollbar
    {
      display: none;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    ol,
li {
  list-style: none;
  padding: 0;
  margin: 0;
  user-select: none;
}

ol {
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateZ(0);
}


  `;

export { GlobalStyle };
