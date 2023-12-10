'use client'

import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    outline-color: ${({ theme }) => theme.s500};
    margin: 0;
  }

  body {
    background-color: ${({ theme }) => theme.s50};
    font-family: sans-serif, system;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }

  input, button, textarea, select {
    font: inherit;
  }

  input, textarea, select {
    width: 100%;
  }
`

export default GlobalStyles
