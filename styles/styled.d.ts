import 'styled-components'

declare module 'styled-components' {
  export interface FontType {
    min: string
    size: string
    max: string
    weight: string
    height: string
  }
  export type ColourCode = `#${string}`
  export interface DefaultTheme {
    palette: {
      common: {
        black: ColourCode
        white: ColourCode
        gray: ColourCode
      }
      primary: ColourCode
      secondary: ColourCode
      danger: ColourCode
    }
    typography: {
      main: string
      fontSize: {
        body: FontType
        input: FontType
        sectionTitle: FontType
        sectionText: FontType
        h1: FontType
        h2: FontType
        h3: FontType
        previewTitle: FontType
        h4: FontType
      }
    }
  }
}
