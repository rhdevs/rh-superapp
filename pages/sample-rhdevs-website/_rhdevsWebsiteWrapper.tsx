import React from 'react'
import NavBar from '@/components/sample-rhdevs-website/NavBar'
import Theme from '@/styles/sample-rhdevs-website/Theme'
import { GlobalStyle } from '@/styles/sample-rhdevs-website/GlobalStyles'

const rhdevsWebsiteWrapper = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        // <Theme>
        //   <GlobalStyle />
        <>
          <NavBar />
          <WrappedComponent {...this.props} />
        </>
        // </Theme>
      )
    }
  }
}

export default rhdevsWebsiteWrapper
