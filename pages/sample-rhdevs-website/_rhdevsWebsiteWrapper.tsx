import React from 'react'
import NavBar from '@/components/sample-rhdevs-website/NavBar'

/* eslint-disable react/prefer-stateless-function */
const rhdevsWebsiteWrapper = (WrappedComponent) =>
  class extends React.Component {
    render() {
      return (
        <div style={{ background: 'black' }}>
          <NavBar />
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }

export default rhdevsWebsiteWrapper
