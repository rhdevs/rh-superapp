import {
  missionDescription,
  visionDescription,
  frontEndDescription,
  backEndDescription,
  designersDescription,
  uiuxDescription,
} from '@/texts/sample-rhdevs-website/descriptions/aboutUs'
import PageSectionComponent from '@/components/sample-rhdevs-website/PageSection'
import { InformationMainContainer } from '@/styles/sample-rhdevs-website/GlobalStyledComponents'
import rhdevsWebsiteWrapper from './_rhdevsWebsiteWrapper'

import frontendLogo from '@/assets/sample-rhdevs-website/frontend_logo.png'
import backendLogo from '@/assets/sample-rhdevs-website/backend_logo.png'
import designersLogo from '@/assets/sample-rhdevs-website/designers_logo.png'
import UIUXLogo from '@/assets/sample-rhdevs-website/uiux_logo.png'

function About() {
  return (
    <InformationMainContainer>
      <PageSectionComponent title="Mission" description={missionDescription} />
      <PageSectionComponent title="Vision" description={visionDescription} />
      <PageSectionComponent
        title="Front End"
        description={frontEndDescription}
        imgPosition="right"
        imageSrc={frontendLogo}
      />
      <PageSectionComponent
        title="Back End"
        description={backEndDescription}
        imgPosition="left"
        imageSrc={backendLogo}
      />
      <PageSectionComponent
        title="Designers"
        description={designersDescription}
        imgPosition="right"
        imageSrc={designersLogo}
      />
      <PageSectionComponent
        title="UI UX"
        description={uiuxDescription}
        imgPosition="left"
        imageSrc={UIUXLogo}
      />
    </InformationMainContainer>
  )
}

export default rhdevsWebsiteWrapper(About)
