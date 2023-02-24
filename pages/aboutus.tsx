import Image from 'next/image'
import styled from 'styled-components'

import ProjectPreview from '@/components/sample-rhdevs-website/ProjectPreview'
import FollowUs from '@/components/FollowUs'
import {
  facilityBooking,
  supperCollation,
  announcementBot,
} from '@/texts/sample-rhdevs-website/descriptions/projects'
import { MainContainer } from '@/styles/sample-rhdevs-website/GlobalStyledComponents'

import logoBackground from '@/assets/sample-rhdevs-website/logo_background.png'
import logo from '@/assets/sample-rhdevs-website/RHDevs_Logo2.png'

const ProjectsMainContainer = styled(MainContainer)`
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
const RightArrow = styled.div`
  border: solid ${(props) => props.theme.palette.common.white};
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  position: absolute;
  right: 16px;
`

const LeftArrow = styled.div`
  border: solid ${(props) => props.theme.palette.common.white};
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  position: absolute;
  left: 16px;
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

const ProjectPreviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 50px;
  margin: 120px 100px 100px 120px;
`

function Projects() {
  return (
    <ProjectsMainContainer>
      <ImageContainer>
        <LeftArrow></LeftArrow>
        <RightArrow></RightArrow>
        <PageDotsContainer>
          <PageDots></PageDots>
          <PageDots></PageDots>
        </PageDotsContainer>
      </ImageContainer>

      <ProjectPreviewContainer>
        <ProjectPreview
          title={facilityBooking.projectTitle}
          text={facilityBooking.projectDescription}
          hasAnimation
        />
        <DividerContainer>
          <Divider />
        </DividerContainer>
        <ProjectPreview
          title={supperCollation.projectTitle}
          text={supperCollation.projectDescription}
          hasAnimation
        />
        <DividerContainer>
          <Divider />
        </DividerContainer>
        <ProjectPreview
          title={announcementBot.projectTitle}
          text={announcementBot.projectDescription}
          hasAnimation
        />
      </ProjectPreviewContainer>
      <FollowUs></FollowUs>
    </ProjectsMainContainer>
  )
}

export default Projects
