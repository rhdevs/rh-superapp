import NavBar from '@/components/NavBar'
import Link from 'next/link'
import styled from 'styled-components'
import descriptionBg from 'public/assets/events/description_bg.png'
import breakpoints from '@/styles/breakpoints'
import { Event, valentinesFundraiser } from '@/texts/common/dummy'

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
  text-align: left; /* Align the text to the left */
  margin-top: 20px;
  padding: 0.75rem; /* Add padding for spacing around the description */
  @media only screen and ${breakpoints.device.lg} {
    padding: 1.5rem; /* Add padding for spacing around the description */
  }
`

const EventDescription = styled.p`
  /* Add description styles here */
  font-size: 1rem; /* Adjust the font size for responsiveness */
`
const ViewPhotosContainer = styled.div`
  border-radius: 1rem; /* Similar to "rounded-m" in Tailwind CSS */
  background-color: #ffffff; /* Add a background color */
  padding: 0.2 rem; /* Add padding for spacing */
  width: 100%;
  margin-top: 20px;
`
const ViewPhotoLink = styled.p`
  color: #000000;
  &:hover {
    color: #555555;
  }
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
  // Replace this with your actual image URL
  const event: Event = valentinesFundraiser
  return (
    <>
      <NavBar />
      <PageContainer>
        <EventTitle>{event.name}</EventTitle>
        <EventImage src={event.image.src} alt="Event Image" />
        <DescriptionContainer>
          <TopLeftSticker src="/assets/events/stickers/moon_sticker.png" alt="Moon Sticker" />
          <BottomRightSticker
            src="/assets/events/stickers/lightning_sticker.png"
            alt="Lightning Sticker"
          />
          <EventDescription>{event.description}</EventDescription>
        </DescriptionContainer>
        <ViewPhotosContainer>
          <Link
            prefetch
            passHref
            href="https://dummylinkphoto.com"
            style={{ textDecoration: 'none' }}
          >
            <ViewPhotoLink>pictures: https://dummylinkphoto.com</ViewPhotoLink>
          </Link>
        </ViewPhotosContainer>
      </PageContainer>
    </>
  )
}

export default EventPage
