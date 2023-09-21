import NavBar from '@/components/NavBar'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

// Styled Components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  width: 85vw; /* Set the container width to 90% of the viewport width */
  max-width: 800px; /* Add a max width for larger screens */
  margin: 0 auto; /* Center align the container horizontally */
`

const EventImage = styled.img`
  width: 100%; /* Make the image responsive, it will fill the container's width */
  max-width: 600px; /* Limit the maximum width of the image */
`

const EventTitle = styled.h1`
  /* Add title styles here */
  font-size: 2rem; /* Adjust the font size for responsiveness */
`

const EventDescription = styled.p`
  /* Add description styles here */
  font-size: 1rem; /* Adjust the font size for responsiveness */
`
const ViewPhotosContainer = styled.div`
  border-radius: 1rem; /* Similar to "rounded-m" in Tailwind CSS */
  background-color: #ffffff; /* Add a background color */
  padding: 0.5rem 1rem; /* Add padding for spacing */
  width: 100%;
  margin-top: 20px;
  cursor: pointer; /* Change the cursor to indicate it's clickable */
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
        <ViewPhotosContainer>
          <Link href="https://dummylinkphoto.com">View Photos</Link>
        </ViewPhotosContainer>
      </PageContainer>
    </>
  )
}

export default EventPage
