import RHDevLogo from '@/components/sample-rhdevs-website/RHDevLogo'
import { MainContainer } from '@/styles/sample-rhdevs-website/GlobalStyledComponents'
import rhdevsWebsiteWrapper from './_rhdevsWebsiteWrapper'

function Home() {
  return (
    <MainContainer>
      <RHDevLogo />
    </MainContainer>
  )
}

export default rhdevsWebsiteWrapper(Home)
