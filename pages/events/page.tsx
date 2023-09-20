// pages/events/[slug].js

import { useRouter } from 'next/router'
import styled from 'styled-components'

// Styled Components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
`

const EventImage = styled.img`
  width: 300px;
  /* Add additional image styles here if needed */
`

const EventTitle = styled.h1`
  /* Add title styles here */
`

const EventDescription = styled.p`
  /* Add description styles here */
`

const EventPage = () => {
  const slug = 'Turtles'

  // Replace this with your actual image URL
  const imageUrl = 'assets/sample-photos/photo1.jpg'

  // Dummy description
  const description = 'This is a dummy description for the event.'

  return (
    <PageContainer>
      <EventImage src={imageUrl} alt="Event Image" />
      <EventTitle>{slug}</EventTitle>
      <EventDescription>{description}</EventDescription>
    </PageContainer>
  )
}

export default EventPage
