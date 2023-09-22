import NavBar from '@/components/NavBar'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import descriptionBg from 'public/assets/events/description_bg.png'

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

const DescriptionContainer = styled.div`
  position: relative;
  font-size: 1rem;
  background-image: url(${descriptionBg?.src});
  background-size: cover; /* Adjust this to control the image sizing */
  padding: 2rem; /* Add padding for spacing around the description */
  margin-top: 20px;
  text-align: left; /* Align the text to the left */
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

// Styled Component for Top-Left Sticker/Image
const TopLeftSticker = styled.img`
  position: absolute;
  width: 10%;
  top: 0px; /* Adjust the top position as needed */
  left: -40px; /* Adjust the left position as needed */
  z-index: 1; /* Ensure the sticker/image appears above the background */
`

// Styled Component for Bottom-Right Sticker/Image
const BottomRightSticker = styled.img`
  position: absolute;
  width: 10%;
  bottom: -30px; /* Adjust the bottom position as needed */
  right: -40px; /* Adjust the right position as needed */
  z-index: 1; /* Ensure the sticker/image appears above the background */
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
        <DescriptionContainer>
          <TopLeftSticker src="/assets/events/stickers/moon_sticker.png" alt="Moon Sticker" />
          <BottomRightSticker
            src="/assets/events/stickers/lightning_sticker.png"
            alt="Lightning Sticker"
          />
          <EventDescription>{description}</EventDescription>
        </DescriptionContainer>
        <ViewPhotosContainer>
          <Link href="https://dummylinkphoto.com">View Photos</Link>
        </ViewPhotosContainer>
      </PageContainer>
    </>
  )
}

export default EventPage
