import Image from 'next/image'
import styled from 'styled-components'

import ProjectPreview from '@/components/ProjectPreview'
import { facilityBooking, supperCollation, announcementBot } from '@/texts/descriptions/projects'
import { MainContainer } from '@/styles/GlobalStyledComponents'

import logoBackground from '@/assets/logo_background.png'
import logo from '@/assets/RHDevs_Logo2.png'

const ProjectsMainContainer = styled(MainContainer)`
  display: grid;
  grid-template-rows: 1fr max-content;
  grid-template-columns: 1fr;
`

const ImageContainer = styled.div`
  background-image: url(${logoBackground.src});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ImageMask = styled.div`
  mask-image: linear-gradient(black 40%, transparent);
  text-align: center;
`

const StyledImage = styled(Image)`
  height: 20%;
  width: 15%;
`
const DividerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
`

const Divider = styled.hr`
  width: 60%;
  border: 1.4px solid ${(props) => props.theme.palette.primary};
`

const ProjectPreviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 50px;
  margin: 0 100px 40px 100px;
`

export default function Projects() {
  return (
    <ProjectsMainContainer>
      <ImageContainer>
        <ImageMask>
          <StyledImage src={logo} alt="logo" />
        </ImageMask>
      </ImageContainer>
      <DividerContainer>
        <Divider />
      </DividerContainer>
      <ProjectPreviewContainer>
        <ProjectPreview
          title={facilityBooking.projectTitle}
          text={facilityBooking.projectDescription}
          hasAnimation
        />
        <ProjectPreview
          title={supperCollation.projectTitle}
          text={supperCollation.projectDescription}
          hasAnimation
        />
        <ProjectPreview
          title={announcementBot.projectTitle}
          text={announcementBot.projectDescription}
          hasAnimation
        />
      </ProjectPreviewContainer>
    </ProjectsMainContainer>
  )
}
