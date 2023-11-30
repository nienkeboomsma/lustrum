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
    font-family: sans-serif, system;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
`

export default GlobalStyles
