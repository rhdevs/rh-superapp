import PageSectionComponent from '@/components/sample-rhdevs-website/PageSection'
import { InformationMainContainer } from '@/styles/sample-rhdevs-website/GlobalStyledComponents'
import { events } from '@/texts/yearbook_events'

export default function Events() {
  return (
    <InformationMainContainer>
      {events.map((event, index) => (
        <div id={`event-${index + 1}`} key={index}>
          <PageSectionComponent
            title={event.title}
            description={event.description}
            imgPosition={index % 2 === 0 ? 'left' : 'right'}
            imageSrc={event.image}
            events
          />
        </div>
      ))}
    </InformationMainContainer>
  )
}

// import PageSectionComponent from '@/components/sample-rhdevs-website/PageSection'
// import { InformationMainContainer } from '@/styles/sample-rhdevs-website/GlobalStyledComponents'
// import { events } from '@/texts/yearbook_events'

// export default function Events() {
//   return (
//     <InformationMainContainer>
//       {events.map((event, index) => (
//         <PageSectionComponent
//           key={index}
//           title={event.title}
//           description={event.description}
//           imgPosition={index % 2 === 0 ? 'left' : 'right'}
//           imageSrc={event.image}
//           events
//         />
//       ))}
//     </InformationMainContainer>
//   )
// }
