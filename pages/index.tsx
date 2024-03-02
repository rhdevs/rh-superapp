import NavBar from '@/components/NavBar'
import styled from 'styled-components'
import Image from 'next/image'
import Carousel from '@/components/Carousel'

const carouselPhotos = [
  { id: 0, src: '/assets/sample-photos/jcrc.jpg' },
  { id: 1, src: '/assets/sample-photos/dnd.jpg' },
  { id: 2, src: '/assets/sample-photos/rhexrecruitment.jpg' },
  { id: 3, src: '/assets/sample-photos/glassjar.jpg' },
  { id: 4, src: '/assets/sample-photos/chec.jpg' },
  { id: 5, src: '/assets/sample-photos/tomodachi.png' },
  { id: 6, src: '/assets/sample-photos/supperhbus.jpg' },
  { id: 7, src: '/assets/sample-photos/photo2.jpg' },
  { id: 8, src: '/assets/sample-photos/photo1.jpg' },
]

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: 100%;
  height: 650px;
  background-image: url('/assets/bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const ImageContainer = styled.div`
  width: 60vw;
  height: 100%;
  max-width: 1000px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: content-box;

  @media only screen and (max-width: 1000px) {
    width: 70vw;
  }

  @media only screen and (max-width: 500px) {
    width: 90vw;
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
        <ImageContainer>
          <Image src="/assets/welcomeText.png" fill alt="Welcome Text" />
        </ImageContainer>
      </WelcomeContainer>
      <Carousel imgArr={carouselPhotos} />
      <CaptionContainer>
        <h1>Browse our latest events!</h1>
      </CaptionContainer>
    </HomeContainer>
  )
}
