import {
  missionDescription,
  visionDescription,
  frontEndDescription,
  backEndDescription,
  designersDescription,
  uiuxDescription,
} from '@/texts/descriptions/aboutUs'
import PageSectionComponent from '@/components/PageSection'
import { InformationMainContainer } from '@/styles/GlobalStyledComponents'

import frontendLogo from '@/assets/frontend_logo.png'
import backendLogo from '@/assets/backend_logo.png'
import designersLogo from '@/assets/designers_logo.png'
import UIUXLogo from '@/assets/uiux_logo.png'

export default function About() {
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
