import { css, FontType } from 'styled-components'

export const body = css`
  margin: 0;
  font-family: -apple-system, Inter, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

export const code = css`
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
`

export const fontTypeCss = css<{ fontType: FontType }>`
  font-weight: ${({ fontType }) => fontType.weight};
  font-size: ${({ fontType }) => `clamp(${fontType.min}, ${fontType.size}, ${fontType.max})`};
  line-height: ${({ fontType }) => fontType.height};
`
