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
  max-width: 900px; /* Add a max width for larger screens */
  margin: 0 auto; /* Center align the container horizontally */
`

const EventImage = styled.img`
  width: 100%; /* Make the image responsive, it will fill the container's width */
  max-width: 600px; /* Limit the maximum width of the image */
`

const EventTitle = styled.h1`
  /* Add title styles here */
  font-size: 2rem; /* Adjust the font size for responsiveness */
  margin: 1vh 1vw;
  font-family: 'BryndanWrite';
`

const ImageContainer = styled.div`
  position: relative;
`

const DescriptionContainer = styled.div`
  position: relative;
  font-size: 1rem;
  background-image: url(${descriptionBg?.src});
  background-size: cover; /* Adjust this to control the image sizing */
  text-align: left; /* Align the text to the left */
  margin-top: 20px;
  padding: 0.5rem 1rem;
  @media only screen and ${breakpoints.device.sm} {
    padding: 0.75rem 1.5rem; /* Add padding for spacing around the description */
  }
`

const EventDescription = styled.p`
  /* Add description styles here */
  font-size: 1rem;
  font-family: 'BryndanWrite';
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
const MoonSticker = styled.img`
  position: absolute;
  width: 10%;
  max-width: 60px;
  top: 0vh; /* Adjust the top position as needed */
  left: -3.3vw; /* Adjust the left position as needed */
  z-index: 1; /* Ensure the sticker/image appears above the background */
  @media only screen and ${breakpoints.device.md} {
    left: -2.3vw;
  }
`

// Styled Component for Bottom-Right Sticker/Image
const LightningSticker = styled.img`
  position: absolute;
  width: 10%;
  max-width: 60px;
  bottom: -4vh; /* Adjust the bottom position as needed */
  right: -2vw; /* Adjust the right position as needed */
  z-index: 1; /* Ensure the sticker/image appears above the background */
`

const HeartSticker = styled.img`
  position: absolute;
  width: 10%;
  top: -2.5vh; /* Adjust the bottom position as needed */
  left: -2.5vw; /* Adjust the right position as needed */
  z-index: 1; /* Ensure the sticker/image appears above the background */
`

const FlowerSticker = styled.img`
  position: absolute;
  width: 10%;
  bottom: -2.5vh; /* Adjust the bottom position as needed */
  right: -2vw; /* Adjust the right position as needed */
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
        <ImageContainer>
          <FlowerSticker src="/assets/events/stickers/flower_sticker.png" alt="Flower Sticker" />
          <HeartSticker src="/assets/events/stickers/heart_sticker.png" alt="Heart Sticker" />
          <EventImage src={event.image.src} alt="Event Image" />
        </ImageContainer>

        <DescriptionContainer>
          <MoonSticker src="/assets/events/stickers/moon_sticker.png" alt="Moon Sticker" />
          <LightningSticker
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
