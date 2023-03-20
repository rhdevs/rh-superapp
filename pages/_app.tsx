import type { AppProps } from 'next/app'
import { GlobalStyle } from '@/styles/GlobalStyles'
import Theme from '@/styles/Theme'
import NavBar from '@/components/NavBar'
import { ParallaxProvider } from 'react-scroll-parallax'

// import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <Theme>
        <GlobalStyle />
        <NavBar />
        <Component {...pageProps} />
      </Theme>
    </ParallaxProvider>
  )
}
