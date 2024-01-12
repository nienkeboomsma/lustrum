'use client'

import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
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
    
    &:focus-visible {
      outline: ${({ theme }) => theme.s500} solid 2px;
    }

  }

  input, textarea, select {
    width: 100%;

    &:focus-visible {
          /* seemingly the only way to fix the inconsistent
         outline-offset between Tiptap and inputs on Safari */
         outline-offset: -1px;
    }
  }
`

export default GlobalStyles
