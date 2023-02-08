import React from 'react'
import NavBar from '@/components/sample-rhdevs-website/NavBar'

const rhdevsWebsiteWrapper = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <div style={{ background: 'black' }}>
          <NavBar />
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
}

export default rhdevsWebsiteWrapper
