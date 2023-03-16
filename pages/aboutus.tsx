import styled from 'styled-components'

import InfoComponent from '@/components/AboutUsInfoComponent'
import SocialMediaLinks from '@/components/SocialMediaLinks'
import {
  facilityBooking,
  supperCollation,
  announcementBot,
} from '@/texts/sample-rhdevs-website/descriptions/projects'
import { MainContainer } from '@/styles/sample-rhdevs-website/GlobalStyledComponents'

const AboutUsMainContainer = styled(MainContainer)`
  display: grid;
  grid-template-rows: 1fr max-content;
  grid-template-columns: 1fr;
`

const ImageContainer = styled.div`
  background-color: ${(props) => props.theme.palette.common.gray};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Arrow = styled.div<{ isRight: boolean }>`
  border: solid ${(props) => props.theme.palette.common.white};
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(${(props) => (props.isRight ? -45 : 135)}deg);
  -webkit-transform: rotate(${(props) => (props.isRight ? -45 : 135)}deg);
  position: absolute;
  left: ${(props) => (props.isRight ? 'auto' : 16)}px;
  right: ${(props) => (props.isRight ? 16 : 'auto')}px;
`

const PageDotsContainer = styled.div`
  position: absolute;
  bottom: 16px;
  display: flex;
`
const PageDots = styled.div`
  background-color: ${(props) => props.theme.palette.common.white};
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin-left: 5px;
`
const DividerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 40px;
  margin-right: 40px;
`

const Divider = styled.hr`
  width: 60%;
  border: 1.4px solid ${(props) => props.theme.palette.common.gray};
`

const InfoComponentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 50px;
  margin: 120px 100px 100px 120px;
`

const AboutUs = () => (
  <AboutUsMainContainer>
    <ImageContainer>
      <Arrow isRight={false} />
      <Arrow isRight />

      <PageDotsContainer>
        <PageDots />
        <PageDots />
      </PageDotsContainer>
    </ImageContainer>

    <InfoComponentContainer>
      <InfoComponent
        title={facilityBooking.projectTitle}
        text={facilityBooking.projectDescription}
        hasAnimation
      />
      <DividerContainer>
        <Divider />
      </DividerContainer>
      <InfoComponent
        title={supperCollation.projectTitle}
        text={supperCollation.projectDescription}
        hasAnimation
      />
      <DividerContainer>
        <Divider />
      </DividerContainer>
      <InfoComponent
        title={announcementBot.projectTitle}
        text={announcementBot.projectDescription}
        hasAnimation
      />
    </InfoComponentContainer>
    <SocialMediaLinks />
  </AboutUsMainContainer>
)

export default AboutUs
