import NavBar from '@/components/NavBar'
import styled from 'styled-components'
import Image from 'next/image'
import Carousel from '@/components/Carousel'

const carouselPhotos = [
  { id: 1, src: '/assets/sample-photos/photo1.jpg' },
  { id: 2, src: '/assets/sample-photos/photo2.jpg' },
  { id: 3, src: '/assets/sample-photos/photo3.jpg' },
  { id: 4, src: '/assets/sample-photos/photo4.jpg' },
  { id: 5, src: '/assets/sample-photos/photo4.jpg' },
  { id: 6, src: '/assets/sample-photos/photo3.jpg' },
  { id: 7, src: '/assets/sample-photos/photo2.jpg' },
  { id: 8, src: '/assets/sample-photos/photo1.jpg' },
]

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`

const WelcomeContainer = styled.div`
  text-align: center;
  justify-content: center;
  width: 100%;
  height: 650px;
  background-image: url('/assets/bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const ImageWrapper = styled.div`
  width: 100%;

  div {
    position: unset !important;
  }

  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`

const CaptionContainer = styled.div`
  justify-content: center;
  width: 100%;
  text-align: center;
`

export default function Home() {
  console.log(typeof carouselPhotos)
  return (
    <HomeContainer>
      <WelcomeContainer>
        <NavBar />
        <ImageWrapper>
          <Image src="/assets/welcomeText.png" objectFit="contain" fill={true} alt="Welcome Text" />
        </ImageWrapper>
      </WelcomeContainer>
      <Carousel imgArr={carouselPhotos} />
      <CaptionContainer>
        <h1>Browse our latest events!</h1>
      </CaptionContainer>
    </HomeContainer>
  )
}
