// pages/events/[slug].js

import NavBar from '@/components/NavBar'
import { useRouter } from 'next/router'
import styled from 'styled-components'

// Styled Components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  padding-left: 5vw;
  padding-right: 5vw;
`

const EventImage = styled.img`
  width: 600px;
`

const EventTitle = styled.h1`
  font-weight: bold;
`

const EventDescription = styled.p`
  width: 600px;
`

const EventPage = () => {
  const router = useRouter()
  const { slug } = router.query // Get the slug from the route parameter

  // Replace this with your actual image URL
  const imageUrl = '/assets/sample-photos/photo1.jpg'

  // Dummy description
  const description = `
    Still thinking of what to get your friends or that special someone for VALENTINES DAY? RVC SP got you!!! 
    With a wide assortment of gifts from fresh flowers and preserved flowers , there's bound to be something for everyone! 
    As all stocks are limited, fill up the pre order form HERE to get FIRST DIBS on your items! 
    .
    P.S. Due to unforeseen circumstances, our crochet flowers will not be sold anymore but fret not! 
    The other options are still available so faster PREORDER NOWWWW
    
    All profits will be channelled to support the welfare of our beneficiaries so DONT WAIT ANYMORE!!! 
    Show your love to your friends/ boo and do a good deed today!
  `

  return (
    <>
      <NavBar />
      <PageContainer>
        <EventTitle>{slug}</EventTitle>
        <EventImage src={imageUrl} alt="Event Image" />
        <EventDescription>{description}</EventDescription>
      </PageContainer>
    </>
  )
}

export default EventPage
