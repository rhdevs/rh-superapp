import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: #f1e1bc;
    font-family: -apple-system, Inter, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
      'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @font-face {
    font-family: 'BryndanWrite';
    src: url('/assets/fonts/Bryndan_Write.ttf') format('truetype');
  }

  code {
    font-family: 'BryndanWrite', source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`
