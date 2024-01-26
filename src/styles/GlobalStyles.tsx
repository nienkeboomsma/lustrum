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
    -webkit-font-smoothing: antialiased;
  }

  p {
    line-height: 1.5;
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

  .root {
    isolation: isolate;
  }
`

export default GlobalStyles
