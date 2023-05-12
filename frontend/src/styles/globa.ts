import { createGlobalStyle } from 'styled-components'

interface GlobalStylesProps {
  theme: {
    [key: string]: string
  }
}

export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background: ${({ theme }) => theme.colors['gray-900']};
    color: ${({ theme }) => theme.colors['gray-100']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }
  
  a {
    text-decoration: none;
  }
`
