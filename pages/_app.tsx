import type { AppProps } from 'next/app'
import { GlobalStyle } from '@/styles/GlobalStyles'
import Theme from '@/styles/Theme'
import NavBar from '@/components/NavBar'

// import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <GlobalStyle />
      <NavBar />
      <Component {...pageProps} />
    </Theme>
  )
}
