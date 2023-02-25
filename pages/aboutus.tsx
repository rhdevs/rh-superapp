/**
 * # Create About Us Page
 *
 * Path: `/aboutus`
 *
 * ## Page Description
 * This page is accessed after the user has clicked on the About Us button on the navigation bar.
 *
 */

import Image from 'next/image'
import styled from 'styled-components'

import Preview from '@/components/AboutUsPreview'
import FollowUs from '@/components/FollowUs'
import {
  facilityBooking,
  supperCollation,
  announcementBot,
} from '@/texts/sample-rhdevs-website/descriptions/projects'
import { MainContainer } from '@/styles/sample-rhdevs-website/GlobalStyledComponents'

import logoBackground from '@/assets/sample-rhdevs-website/logo_background.png'
import logo from '@/assets/sample-rhdevs-website/RHDevs_Logo2.png'

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

const ImageMask = styled.div`
  mask-image: linear-gradient(black 40%, transparent);
  text-align: center;
`

const StyledImage = styled(Image)`
  height: 20%;
  width: 15%;
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

const PreviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 50px;
  margin: 120px 100px 100px 120px;
`

function Projects() {
  return (
    <AboutUsMainContainer>
      <ImageContainer>
        <Arrow isRight={false}></Arrow>
        <Arrow isRight={true}></Arrow>

        <PageDotsContainer>
          <PageDots></PageDots>
          <PageDots></PageDots>
        </PageDotsContainer>
      </ImageContainer>

      <PreviewContainer>
        <Preview
          title={facilityBooking.projectTitle}
          text={facilityBooking.projectDescription}
          hasAnimation
        />
        <DividerContainer>
          <Divider />
        </DividerContainer>
        <Preview
          title={supperCollation.projectTitle}
          text={supperCollation.projectDescription}
          hasAnimation
        />
        <DividerContainer>
          <Divider />
        </DividerContainer>
        <Preview
          title={announcementBot.projectTitle}
          text={announcementBot.projectDescription}
          hasAnimation
        />
      </PreviewContainer>
      <FollowUs></FollowUs>
    </AboutUsMainContainer>
  )
}

export default Projects
