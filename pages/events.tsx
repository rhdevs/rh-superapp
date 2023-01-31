import PageSectionComponent from '@/components/PageSection'
import { InformationMainContainer } from '@/styles/GlobalStyledComponents'
import { events } from '@/texts/descriptions/events'

export default function Events() {
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
