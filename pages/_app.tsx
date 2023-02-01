import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import { GlobalStyle } from '@/styles/GlobalStyles'
import Theme from '@/styles/Theme'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <GlobalStyle />
      <NavBar />
      <Component {...pageProps} />
    </Theme>
  )
}
