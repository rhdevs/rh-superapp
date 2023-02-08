import type { AppProps } from 'next/app'
import { GlobalStyle } from '@/styles/GlobalStyles'
import Theme from '@/styles/Theme'

// import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <GlobalStyle />
      <Component {...pageProps} />
    </Theme>
  )
}
