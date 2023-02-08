import PageSectionComponent from '@/components/sample-rhdevs-website/PageSection'
import { InformationMainContainer } from '@/styles/sample-rhdevs-website/GlobalStyledComponents'
import { events } from '@/texts/descriptions/events'
import rhdevsWebsiteWrapper from './_rhdevsWebsiteWrapper'

function Events() {
  return (
    <InformationMainContainer>
      {events.map((event, index) => (
        <PageSectionComponent
          key={index}
          title={event.title}
          description={event.description}
          imgPosition={index % 2 === 0 ? 'left' : 'right'}
          imageSrc={event.image}
          events
        />
      ))}
    </InformationMainContainer>
  )
}

export default rhdevsWebsiteWrapper(Events)
